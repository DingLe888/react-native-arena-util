
package com.quenice.cardview;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class RNArenaUtilModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNArenaUtilModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNArenaUtil";
  }

  @ReactMethod
  public void log() {
	System.out.println("android 的打印");
  }
}