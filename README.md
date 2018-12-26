
# react-native-arena-util

## Getting started

`$ npm install react-native-arena-util --save`

### Mostly automatic installation

`$ react-native link react-native-arena-util`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-arena-util` and add `RNArenaUtil.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNArenaUtil.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.quenice.cardview.RNArenaUtilPackage;` to the imports at the top of the file
  - Add `new RNArenaUtilPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-arena-util'
  	project(':react-native-arena-util').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-arena-util/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-arena-util')
  	```


## Usage
```javascript
import RNArenaUtil from 'react-native-arena-util';

// TODO: What to do with the module?
RNArenaUtil;
```
  