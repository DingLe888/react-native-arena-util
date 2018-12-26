/**
 * Created by zhanglin on 2018/8/14.
 */
export default class Validator {
    /**
     *  判断是不是email
     *
     * @param value (校验的值)
     * @returns {boolean|*}
     */
    static email(value) {
        return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
            value
        );
    }

    /**
     * 判断是不是url
     *
     * @param value
     * @returns {boolean|*}
     */
    static url(value) {
        return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
            value
        );
    }

    /**
     * 判断是不是ISO的日期格式
     *
     * @param value
     * @returns {boolean|*}
     */
    static dataISO(value) {
        return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
    }

    /**
     * 判断是不是数字带小数点
     *
     * @param value
     * @returns {boolean}
     */
    static number(value) {
        return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
    }

    /**
     * 校验是不是数字不带小数点
     *
     * @param value
     * @returns {boolean|*}
     */
    static digits(value) {
        return /^\d+$/.test(value);
    }

    /**
     * 身份证号码
     *
     * @param value
     * @returns {boolean}
     */
    static cardNo(value) {
        let len = value.length,
            re;
        if (len == 15) re = new RegExp(/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{3})$/);
        else if (len == 18) re = new RegExp(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\d|[Xx])$/);
        else {
            return false;
        }
        let a = value.match(re);
        if (a != null) {
            let B;
            if (len == 15) {
                let D = new Date('19' + a[3] + '/' + a[4] + '/' + a[5]);
                B = D.getYear() == a[3] && D.getMonth() + 1 == a[4] && D.getDate() == a[5];
            } else {
                let D = new Date(a[3] + '/' + a[4] + '/' + a[5]);
                B = D.getFullYear() == a[3] && D.getMonth() + 1 == a[4] && D.getDate() == a[5];
            }
            if (!B) {
                return false;
            }
        }
        return true;
    }

    /**
     *
     * @param value
     * @returns {boolean|*}
     */
    static qq(value) {
        let reg = /^[1-9][0-9]{4,14}$/;

        return reg.test(value);
    }

    /**
     * 手机号码
     * @param value
     * @returns {boolean}
     */
    static mobile(value) {
        let length = value.length;
        let reg = /^((1)+\d{10})$/;

        return length == 11 && reg.test(value);
    }

    /**
     * 电话号码
     * @param value
     * @returns {boolean|*}
     */
    static phone(value) {
        let reg = /^((\d{10,11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)$/;

        return reg.test(value);
    }

    /**
     * 密码强度验证: 密码必须是字符与数字的混合
     *
     * @param value
     * @returns {boolean}
     */
    static pwdMix(value) {
        let reg = /[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/;

        return reg.test(value);
    }

    /**
     * 非法字符
     *
     * @param value
     * @returns {boolean}
     */
    static forbbidenChar(value) {
        return /[&\\<>'"]/.test(value);
    }

    /**
     * 邮编
     *
     * @param value
     * @returns {boolean}
     */
    static zipCode(value) {
        return /^[0-9]{6}$/.test(value);
    }

    /**
     * 判断是不是数字最多两位小数
     *
     * @param value
     * @returns {boolean}
     */
    static number2point(value) {
        return /^[0-9]+(\.[0-9]{1,2})?$/.test(value);
    }

    /**
     * 判断是不是金额，整数最多6位+2位小数
     *
     * @param value
     * @returns {boolean}
     */
    static moneyCheck(value) {
        return /^[0-9]{1,6}([.][0-9]{1,2})?$/.test(value);
    }

    /**
     * 运行时检查金额是不是最多6位和2位小数
     * */
    static moneyCheckRunTime(value) {
        return /^[0-9]{0,6}((.)|([.][0-9]{1,2}))?$/.test(value);
    }

    /**
     * 支持中文和字母
     * @param value
     * @returns {boolean}
     */
    static chineseLetter(value) {
        let reg = /^([\u4e00-\u9fa5]|[a-zA-Z])*$/;
        if (reg.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 支持中文、字母、数字组合
     * @param value
     * @returns {boolean}
     */
    static chineseLetterNumber(value) {
        let reg = /^([\u4e00-\u9fa5]|[a-zA-Z]|[0-9])*$/;
        if (reg.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 判断集合时候为空
     * @param value immutable 对象
     * @returns {boolean}
     */
    static isEmptyList(value) {
        return value.size > 0;
    }
}
