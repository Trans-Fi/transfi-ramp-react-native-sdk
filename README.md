# @admin-tfi/ramp-react-native-sdk

React Native WebView SDK for TransFi Ramp — embed the TransFi buy/sell crypto widget in your mobile app.

## Installation

```sh
npm install @admin-tfi/ramp-react-native-sdk
```

## Usage

```js
import { TransfiRampReactNativeSdkView } from "@admin-tfi/ramp-react-native-sdk";

<TransfiRampReactNativeSdkView
  style={styles.webview}
  source={{ uri: 'https://buy.transfi.com/?apiKey=YOUR_API_KEY' }}
  javaScriptEnabled={true}
  messagingEnabled={true}
  domStorageEnabled={true}
  onMessage={(event) => {
    console.log('event', event?.nativeEvent?.data);
  }}
/>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
