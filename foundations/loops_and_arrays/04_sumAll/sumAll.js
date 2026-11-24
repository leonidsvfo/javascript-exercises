const sumAll = function(a, b, ...c) {
    if ((a < 0 || b < 0) || (a !== parseInt(a, 10) || b !== parseInt(b, 10))) {return 'ERROR'};
    let summ = a + b
    if (a < b){
        let i = a + 1;
        for (; i < b; i++) {
            summ += i;
        }
        return summ
    } else if (a > b){
        let i = a - 1;
        for (; i > b; i--) {
            summ += i;
        }
        return summ
    }
};

// Do not edit below this line
module.exports = sumAll;
