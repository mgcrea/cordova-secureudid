//
//  SecureDeviceIdentifier.m
//
// Created by Olivier Louvignes on 2012-05-31.
//
// Copyright 2012 Olivier Louvignes. All rights reserved.
// MIT Licensed

#import "SecureDeviceIdentifier.h"
#import "SecureUDID.h"

@implementation SecureDeviceIdentifier

@synthesize callbackId = _callbackId, secureUDID = _secureUDID;

- (void)get:(CDVInvokedUrlCommand*)command {

	self.callbackId = command.callbackId;
	NSDictionary *options = [command.arguments objectAtIndex:0];

	// Compiling options with defaults
	NSString *domain = [options objectForKey:@"domain"] ?: @"";
	NSString *key = [options objectForKey:@"key"] ?: @"";
	self.secureUDID = [SecureUDID UDIDForDomain:domain usingKey:key];
	ALog(@"self.secureUDID %@", self.secureUDID);

	// Create Plugin Result
	CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:self.secureUDID];
	// Call  the Success Javascript function
	[self writeJavascript: [pluginResult toSuccessCallbackString:self.callbackId]];

}

@end
