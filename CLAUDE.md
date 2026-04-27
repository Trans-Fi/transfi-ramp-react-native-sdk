# transfi-ramp-react-native-sdk

## Overview
React Native SDK (v0.1.4) that embeds the TransFi ramp widget into mobile apps via a WebView, providing buy/sell crypto functionality for iOS and Android.

## Category
SDK/Library

## Tech Stack
- React Native (iOS + Android)
- TypeScript
- react-native-webview (WebView wrapper)
- react-native-builder-bob (build tooling)
- Jest (testing)

## Key Directories
- `src/`: SDK source — `WebViewScreen.js` (main component), `index.js` (exports)
- `android/`: Android native module files
- `ios/`: iOS native module files (.podspec included)
- `example/`: Example app demonstrating SDK usage
- `lib/`: Built output (CommonJS, ESM, TypeScript declarations)

## Related Services
- `transfi-ramp-widget`: The web widget loaded inside the WebView
- `transfi-ramp-server`: Backend API serving the widget

## Development
```bash
yarn install
yarn bootstrap       # Install example app deps and iOS pods
yarn test            # Run Jest tests
yarn lint            # Run ESLint
yarn prepack         # Build (runs bob build)
```

## Notes
Published to npm registry (`registry.npmjs.org`). The SDK is a thin WebView wrapper — it renders the TransFi ramp web widget inside a `react-native-webview`. A loading animation (TransFi logo GIF) is shown while the WebView initializes. Uses conventional changelog for releases via `release-it`. Peer dependencies: `react` and `react-native` (any version).
