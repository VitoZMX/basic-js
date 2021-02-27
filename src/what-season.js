const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    let type = ['number', 'function', 'object', 'array', 'string'];
    let str = isNaN(Date.parse(date)) ? (type.indexOf(typeof date) >= 0 ? 'Error' : 'Unable to determine the time of year!') : date.getUTCMonth();
    switch (str) {
        case 0:
        case 1:
        case 11:
            return 'winter';
        case 2:
        case 3:
        case 4:
            return 'spring';
        case 5:
        case 6:
        case 7:
            return 'summer';
        case 8:
        case 9:
        case 10:
            return 'autumn';
        case "Error":
            throw str;
        default:
            return str;
    }
};