function largestNum(arr) {
    let num = arr[0]
    for ( i = 0; i < arr.length; ++i) {
        if (num < arr[i]) {
            num = arr[i]
        }
    }
    return num
}

console.log(largestNum([-100,-2,-3,4]))

function calcTime(secs) {
    let calcMins = Math.floor(secs / 60)
    let calcSecs = secs % 60
    if (calcMins < 10) {
        calcMins = '0' + calcMins
    }
    if (calcSecs < 10) {
        calcSecs = '0' + calcSecs
    }
    return calcMins + ':' + calcSecs
}

console.log(calcTime(69))

function progressSum(num) {
    let sum = 0
    for (i = 0; i <= num; ++i) {
        sum = sum + i
    }
    return sum
}

console.log(progressSum(3))

function arrsum(arr) {
    let sum = 0
    for (i = 0; i < arr.length ; ++i) {
        sum = sum + arr[i]
      
    }
    return sum
}

console.log(arrsum([1,1,1,90]))

function arrlength(arr) {
    return arr.length
}

console.log(arrlength([1]))

function filterfalse(input1, input2) {
    return input1 == false ? input1 : input2
}

console.log(filterfalse(true,500))