const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

    str = str + '';
    let separator = '+';

    if ('separator' in options) {
        separator = options.separator;
    }

    if ('additionRepeatTimes' in options) {
        for (let i = 1; i < options.additionRepeatTimes; i++) {
            if ('addition' in options) {
                str += options.addition;
            }
            if ('additionSeparator' in options) {
                str += options.additionSeparator;
            }
        }
    }

    if ('addition' in options) {
        str += options.addition;
    }

    if ('repeatTimes' in options) {
        let basicstr = str;
        for (let i = 1; i < options.repeatTimes; i++) {
            str += separator + basicstr;
        }
    }

    return str;
};