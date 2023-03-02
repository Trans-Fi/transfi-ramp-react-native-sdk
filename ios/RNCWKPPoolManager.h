#import <WebKit/WebKit.h>

@interface RNCWKPPoolManager : NSObject

+ (instancetype) sharedManager;
- (WKProcessPool *)sharedProcessPool;

@end
