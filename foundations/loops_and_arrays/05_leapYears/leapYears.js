const leapYears = function(year) {
    let trueOrFalse = (year % 4 === 0) && (year % 100 !== 0) || year % 400 === 0;
    return trueOrFalse
}

// Do not edit below this line
module.exports = leapYears;


/*
true:
- divisible by 4;
- divisible by 400;

false:
- divisble by 100
*/