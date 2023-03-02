#import <Foundation/Foundation.h>
#import "RNCWKPPoolManager.h"

@interface RNCWKPPoolManager() {
  WKProcessPool *_sharedProcessPool;
}
@end

@implementation RNCWKPPoolManager

+ (id) sharedManager {
  static RNCWKPPoolManager *_sharedManager = nil;
  @synchronized(self) {
    if(_sharedManager == nil) {
      _sharedManager = [[super alloc] init];
    }
    return _sharedManager;
  }
}

- (WKProcessPool *)sharedProcessPool {
  if (!_sharedProcessPool) {
    _sharedProcessPool = [[WKProcessPool alloc] init];
  }
  return _sharedProcessPool;
}

@end

