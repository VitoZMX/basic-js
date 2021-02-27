const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    }
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "--double-next") {
            if (i < arr.length - 1) {
                a.push(arr[i + 1]);
            }
        } else if (arr[i] == "--double-prev") {
            if (i !== 0 && arr[i - 2] !== "--discard-next") {
                a.push(arr[i - 1]);
            }
        } else if (arr[i] == "--discard-next") {
            i++;
        } else if (arr[i] == "--discard-prev") {
            if (a.length !== 0 && arr[i - 2] !== "--discard-next") {
                a.pop();
            }
        } else {
            a.push(arr[i]);
        }
    }
    return a;
};