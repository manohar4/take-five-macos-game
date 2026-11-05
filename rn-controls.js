import React from 'react';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
// Import individual React Native Web components. Importing from the package root
// pulls in the full native surface (including Animated), which Vite cannot bundle.
import Image from 'react-native-web/dist/exports/Image/index.js';
import Pressable from 'react-native-web/dist/exports/Pressable/index.js';
import Text from 'react-native-web/dist/exports/Text/index.js';
import View from 'react-native-web/dist/exports/View/index.js';

const roots = new Map();
const inlineTags = new Set(['span', 'i', 'b', 'strong', 'small', 'em', 'label']);

function toNativeStyle(styleText = '') {
  const source = document.createElement('span').style;
  source.cssText = styleText;
  const style = {};
  for (let i = 0; i < source.length; i++) {
    const cssName = source[i];
    if (cssName.startsWith('--')) continue;
    const key = cssName.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    const value = source.getPropertyValue(cssName).trim();
    style[key] = /^-?\d+(?:\.\d+)?px$/.test(value) ? Number.parseFloat(value) : value;
  }
  return style;
}

function nativeProps(element, key) {
  const props = { key };
  for (const attr of element.attributes) {
    if (attr.name === 'class') props.className = attr.value;
    else if (attr.name === 'style') props.style = toNativeStyle(attr.value);
    else if (attr.name === 'draggable' || attr.name === 'type' || attr.name === 'tabindex') continue;
    else props[attr.name] = attr.value;
  }
  return props;
}

function preserveCssClass(props) {
  const names = props.className?.split(/\s+/).filter(Boolean) || [];
  const dataAttributes = Object.entries(props).filter(([name]) => name.startsWith('data-'));
  delete props.className;
  for (const [name] of dataAttributes) delete props[name];
  if (names.length || dataAttributes.length) props.ref = node => {
    if (!node) return;
    if (names.length) node.classList.add(...names);
    for (const [name, value] of dataAttributes) node.setAttribute(name, value);
  };
  return props;
}

function toNativeNode(node, key = 'child') {
  if (node.nodeType === Node.TEXT_NODE) return node.textContent ? node.textContent : null;
  if (node.nodeType !== Node.ELEMENT_NODE) return null;
  const tag = node.tagName.toLowerCase();
  const props = preserveCssClass(nativeProps(node, key));
  if (tag === 'img') {
    props.source = { uri: node.getAttribute('src') || '' };
    if (node.hasAttribute('alt')) props.accessibilityLabel = node.getAttribute('alt');
    delete props.src;
    delete props.alt;
    return React.createElement(Image, props);
  }
  const hasBlockChild = node.querySelector('div, img, svg, button');
  const Component = inlineTags.has(tag) && !hasBlockChild ? Text : View;
  const children = Array.from(node.childNodes).map((child, index) => toNativeNode(child, `${key}-${index}`));
  return React.createElement(Component, props, ...children);
}

function toNativeButton(button) {
  const props = nativeProps(button);
  const names = props.className?.split(/\s+/).filter(Boolean) || [];
  const dataAttributes = Object.entries(props).filter(([name]) => name.startsWith('data-'));
  const originalStyle = button.getAttribute('style') || '';
  const host = document.createElement('span');
  host.className = 'rn-control-root';
  host.style.cssText = originalStyle;
  button.replaceWith(host);
  const root = createRoot(host);
  roots.set(host, root);
  const content = Array.from(button.childNodes).map((node, index) => toNativeNode(node, `button-${index}`));
  const disabled = button.hasAttribute('disabled');
  delete props.style;
  delete props.disabled;
  delete props.className;
  for (const [name] of dataAttributes) delete props[name];
  props.ref = node => {
    if (!node) return;
    if (names.length) node.classList.add(...names);
    for (const [name, value] of dataAttributes) node.setAttribute(name, value);
  };
  props.role = props.role || 'button';
  props.accessibilityRole = props.role;
  props.disabled = disabled;
  props.onPress = () => host.firstElementChild?.dispatchEvent(new CustomEvent('rnpress', { bubbles: true }));
  flushSync(() => root.render(React.createElement(Pressable, props, ...content)));
}

export function clearNativeControls(container) {
  for (const [host, root] of roots) {
    if (container === host || container.contains(host)) {
      root.unmount();
      roots.delete(host);
    }
  }
}

export function mountNativeControls(container) {
  container.querySelectorAll('button').forEach(toNativeButton);
}
