function stuffistrue(logInStatus,subStatus) {
    return logInStatus === "logged_in" && subStatus === "subbed"
}

console.log(stuffistrue("logged_in","subbed"))

function boolInt(num) {
    return num % 2 === 0 ? 1 : -1
}


console.log(boolInt(2))

function isOdd (num) {
    return num % 2 === 1 
}

console.log(isOdd(5))

function calcRemainder(num1,num2) {
    return num1 % num2
}

console.log(calcRemainder(7,0))

function isNot0 (anything) {
    return anything !== 0
}

console.log(isNot0(0))

function oppo(statement) {
    return !statement
}

console.log(oppo(false))
  
function lessT0(num) {
    return num <= 0
}
console.log(lessT0(-9))

function sumGreaterT100(num1, num2) {
    if (num1 + num2 > 100) {
      return "true";
    }
    return "false";
  }
  
  console.log(sumGreaterT100(101, -201));
