
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
1、获取uuid
let uuid = RNArenaUtil.getUUID()

2、验证某个字符串是否符合要求
let emailStr = '18911755085@163.com'
<!--判断字符串是否是邮箱地址-->
let isEmail = RNArenaUtil.Validator.email(emailStr)

<!--同样的验证还有-->
* url ：判断是不是url
* dataISO：判断是不是ISO的日期格式
* number：判断是不是数字（带小数点）
* digits：校验是不是小数
* cardNo：身份证号码
* mobile：手机号码
* phone：电话号码
* zipCode：邮编
* number2point：判断是不是数字最多两位小数
* chineseLetter：是否是中文和字母
* chineseLetterNumber：是否是中午数字字母

3、 引入了Date拓展

// 格式化时间字符串
let dateStr = new Date().format('yyyy-MM-dd')

// 加一天
let date = date.addDays()

// 加一周
let date = date.addWeeks()

// 加一月
let date = date.addMonths()

```
  