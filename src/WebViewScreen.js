import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
export const logo = require('./assets/logo-ori.gif');

const WebViewScreen = (props) => {
  const Loading = () => {
    return (
      <View style={styles.activityContainer}>
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
      //style={styles.container}
      {...props}
    />
  );
};
const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    marginTop: -100,
  },

  activityContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#FFF',
    height: '100%',
    width: '100%',
  },
});
export default WebViewScreen;
