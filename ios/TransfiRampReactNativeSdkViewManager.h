#import <React/RCTViewManager.h>

@interface TransfiRampReactNativeSdkViewManager : RCTViewManager
@property (nonatomic, copy) NSArray<NSDictionary *> * _Nullable menuItems;
@property (nonatomic, copy) RCTDirectEventBlock onCustomMenuSelection;
@end
