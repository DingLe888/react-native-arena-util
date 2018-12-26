
import { NativeModules } from 'react-native';

const { RNArenaUtil } = NativeModules;
 
import uuid from './util/uuid'
import Validator from './util/validator'
import DateUtil from './util/date-extension'


const util = {
    getUUID:uuid, // 获取uuid
    Validator:Validator, //  各种验证字符串的方法，
}

export default util