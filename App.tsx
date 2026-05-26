/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import { TransfiRampReactNativeSdkView } from 'transfi-ramp-react-native-sdk';
// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <AppContent />
//     </SafeAreaProvider>
//   );
// }

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <View style={styles.container}>
//       <NewAppScreen
//         templateFileName="App.tsx"
//         safeAreaInsets={safeAreaInsets}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;
import React from 'react';
import { View } from 'react-native';
import { TransfiRampReactNativeSdkView } from 'transfi-ramp-react-native-sdk';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <TransfiRampReactNativeSdkView
        style={{ flex: 1 }}
        source={{
          uri: 'https://qa-buy.transfi.com/?product=sell&apiKey=xQXKMaSXsfHZSdS7',
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onMessage={(event:any) => {
          console.log('EVENT:', event.nativeEvent.data);
        }}
      />
    </View>
  );
}