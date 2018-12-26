
#import "RNArenaUtil.h"

@implementation RNArenaUtil

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(log){
    NSLog(@"我是输出");
}

@end
  
