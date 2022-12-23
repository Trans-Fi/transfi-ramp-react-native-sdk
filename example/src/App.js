import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { TransfiRampReactNativeSdkView } from 'transfi-ramp-react-native-sdk';

export default function App() {
  return (
    <TransfiRampReactNativeSdkView
      style={styles.webview}
      source={{ uri: 'https://buy.transfi.com/?apiKey=[YOUR_API_KEY]' }}
      javaScriptEnabled={true}
      messagingEnabled={true}
      domStorageEnabled={true}
      onMessage={(event) => {
        console.log('event', event?.nativeEvent?.data);
      }}
    />
  );
}

const styles = StyleSheet.create({
  webview: {
    width: '100%',
    height: '100%',
  },
});
