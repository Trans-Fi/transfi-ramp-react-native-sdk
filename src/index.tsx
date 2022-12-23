import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'transfi-ramp-react-native-sdk' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type TransfiRampReactNativeSdkProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'TransfiRampReactNativeSdkView';

export const TransfiRampReactNativeSdkView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<TransfiRampReactNativeSdkProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
