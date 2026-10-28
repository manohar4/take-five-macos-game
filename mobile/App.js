import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, BackHandler, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

const GAME_URL = process.env.EXPO_PUBLIC_GAME_URL || Constants.expoConfig?.extra?.gameUrl || 'https://take-five-friends-game.onrender.com/';
const GAME_ORIGIN = new URL(GAME_URL).origin;

export default function App() {
  const webView = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
      if (!canGoBack) return false;
      webView.current?.goBack();
      return true;
    });
    return () => subscription.remove();
  }, [canGoBack]);

  const retry = () => {
    setFailed(false);
    setLoading(true);
    webView.current?.reload();
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.screen} edges={['top', 'bottom']}>
        <StatusBar style="light" backgroundColor="#0e5731" />
        <WebView
          ref={webView}
          source={{ uri: GAME_URL }}
          style={styles.webView}
          originWhitelist={['https://*']}
          javaScriptEnabled
          domStorageEnabled
          sharedCookiesEnabled
          thirdPartyCookiesEnabled
          allowsInlineMediaPlayback
          mediaPlaybackRequiresUserAction={false}
          setSupportMultipleWindows={false}
          bounces={false}
          onLoadStart={() => { setLoading(true); setFailed(false); }}
          onLoadEnd={() => setLoading(false)}
          onError={() => { setLoading(false); setFailed(true); }}
          onHttpError={({ nativeEvent }) => {
            if (nativeEvent.url === GAME_URL && nativeEvent.statusCode >= 500) {
              setLoading(false);
              setFailed(true);
            }
          }}
          onNavigationStateChange={navigation => setCanGoBack(navigation.canGoBack)}
          onShouldStartLoadWithRequest={request => {
            if (request.url.startsWith(GAME_ORIGIN)) return true;
            if (request.url.startsWith('https://') || request.url.startsWith('mailto:') || request.url.startsWith('tel:')) {
              Linking.openURL(request.url).catch(() => {});
            }
            return false;
          }}
        />
        {loading && !failed && (
          <View pointerEvents="none" style={styles.loading}>
            <ActivityIndicator size="large" color="#ffd84e" />
            <Text style={styles.loadingText}>Setting the table…</Text>
          </View>
        )}
        {failed && (
          <View style={styles.error}>
            <Text style={styles.errorTitle}>Can’t reach the table</Text>
            <Text style={styles.errorCopy}>Check your internet connection, then try again.</Text>
            <Pressable accessibilityRole="button" onPress={retry} style={styles.retry}>
              <Text style={styles.retryText}>Try again</Text>
            </Pressable>
          </View>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0e5731' },
  webView: { flex: 1, backgroundColor: '#0e5731' },
  loading: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    backgroundColor: '#0e5731',
  },
  loadingText: { color: '#f8f4df', fontSize: 15, fontWeight: '700' },
  error: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 28,
    backgroundColor: '#0e5731',
  },
  errorTitle: { color: '#fff6d6', fontSize: 24, fontWeight: '800', textAlign: 'center' },
  errorCopy: { marginTop: 10, color: '#dcebd4', fontSize: 15, textAlign: 'center', lineHeight: 22 },
  retry: { minHeight: 48, marginTop: 22, paddingHorizontal: 28, borderRadius: 14, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffd84e' },
  retryText: { color: '#304623', fontSize: 16, fontWeight: '800' },
});
