import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
export const logo = require('./assets/logo.jpeg');

const WebViewScreen = (props) => {
  const Loading = () => {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
      </View>
    );
  };
  return (
    <WebView
      startInLoadingState
      renderLoading={() => {
        return <Loading />;
      }}
      {...props}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: -50,
  },
});
export default WebViewScreen;
