const CustomError = require("../extensions/custom-error");


module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }
    let answer = [];
    members.sort();
    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] == 'string') {
            members[i] = members[i].replace(/\s+/g, '');
            answer.push(members[i][0]);
        }
    }
    for (let i = 0; i < answer.length; i++) {
        answer[i] = answer[i].toUpperCase();
    }

    return answer.sort().join('');
};