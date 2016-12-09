//
//  iOSExport.m
//  UICompent
//
//  Created by 句芒 on 16/12/1.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "iOSExport.h"

@implementation iOSExport
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(rnToiOS:(NSString *)name :(NSInteger)age) {
  NSString *st = [NSString stringWithFormat:@"name:%@,age:%ld",name,age];
    NSLog(@"test:%@",st);
    [self alter:st];
}
RCT_EXPORT_METHOD(rnToiOSwithDic:(NSDictionary*)dic andCallback:(RCTResponseSenderBlock)callback) {
  NSMutableString *st = [NSMutableString string];
  for (NSObject *key in dic.allKeys) {
    NSString *string = [NSString stringWithFormat:@"%@:%@;",key,[dic objectForKey:key]];
     [st appendString:string];
  }
  callback(@[@"error",st]);
  [self alter:st];
}

RCT_EXPORT_METHOD(rnToiOSAge:(NSInteger)age resolve:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
  if (age > 23) {
    resolve(@[@"句芒"]);
  }else {
    reject(@"101",@"年龄错误",[NSError errorWithDomain:@"错误" code:1 userInfo:nil]);
  }
}

- (void)alter:(NSString *)st {
  UIAlertController *alter = [UIAlertController alertControllerWithTitle:@"测试" message:st preferredStyle:UIAlertControllerStyleAlert];
  [alter addAction:[UIAlertAction actionWithTitle:@"了解" style:UIAlertActionStyleCancel handler:nil]];
  [[UIApplication sharedApplication].keyWindow.rootViewController presentViewController:alter animated:YES completion:nil];
}
@end
