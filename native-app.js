import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';

export const isNativeApp = Capacitor.isNativePlatform();
export const publicGameUrl = import.meta.env.VITE_PUBLIC_GAME_URL || 'https://take-five-friends-game.onrender.com/';

if (isNativeApp) {
  document.documentElement.classList.add('capacitor-native');

  App.addListener('backButton', () => {
    const rulesDialog = document.querySelector('#rulesDialog');
    if (rulesDialog?.open) {
      rulesDialog.close();
      return;
    }

    const menu = document.querySelector('#gameMenuPanel');
    if (menu && !menu.classList.contains('is-hidden')) {
      document.querySelector('#gameMenuToggle')?.dispatchEvent(new CustomEvent('rnpress', { bubbles: true }));
      return;
    }

    const menuButton = document.querySelector('#gameMenuToggle');
    if (menuButton) {
      menuButton.dispatchEvent(new CustomEvent('rnpress', { bubbles: true }));
      return;
    }

    App.exitApp();
  });

  App.addListener('appUrlOpen', ({ url }) => {
    try {
      const room = new URL(url).searchParams.get('room');
      if (/^\d{4}$/.test(room || '')) {
        window.location.assign(`/?room=${encodeURIComponent(room)}`);
      }
    } catch {
      // Ignore links that are not valid room invites.
    }
  });
}
