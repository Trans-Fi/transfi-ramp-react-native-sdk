#import <WebKit/WebKit.h>

@interface RNCWKProcessPoolManager : NSObject

+ (instancetype) sharedManager;
- (WKProcessPool *)sharedProcessPool;

@end
