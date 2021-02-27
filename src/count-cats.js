const CustomError = require("../extensions/custom-error");


module.exports = function countCats(matrix) {
    let num = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let f = 0; f < matrix[i].length; f++) {
            if (matrix[i][f] === "^^") {
                num += 1;
            }
        }
    }
    return num;
};