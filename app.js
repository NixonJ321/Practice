function progressiveSum(num) {
    let sum = 0
    for (let i = 0; i < num+1; ++i) {
        sum = sum + i
    }
    return sum
}

console.log(progressiveSum(300));

function arrSum(arr) {
    let base = 0
    for (let i = 0; i < arr.length; ++i) {
        base = base + arr[i]
    }
    return console.log(base)
}

console.log(arrSum([2,2,2]))

function arrLength(arr) {
    return arr[arr.length-1]
}

console.log(arrLength([1,2,3,3,15]))

function filterOutFalsy(input1,input2) {
    return input1 == false ? input1 : input2
  }
  
  console.log(filterOutFalsy(true,500))

