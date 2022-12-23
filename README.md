# transfi-ramp-react-native-sdk

react native webview sdk 

## Installation

```sh
npm install transfi-ramp-react-native-sdk
```

## Usage

```js
import { TransfiRampReactNativeSdkView } from "transfi-ramp-react-native-sdk";

// ...

<TransfiRampReactNativeSdkView
      source={{ uri: 'https://buy.transfi.com/?apiKey=[YOUR_API_KEY]' }}
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

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
# transfi-ramp-react-native-sdk
