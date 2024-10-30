function getMax (arr) {
let max = arr[0]
for (let i = 0; i < arr.length; ++i) {
    if (max < arr[i]) {
        max = arr[i]
    }
}
return max
}

console.log(getMax([-300,-100,200]))

function calcTime(num) {
    let min = Math.floor(num / 60)
    let sec = num % 60
    if (min < 10) {
        min = '0' + min
    }
    if (sec < 10) {
        sec = '0' + sec
    }

    return min + ":" + sec
}

console.log(calcTime(50))

function addtionButHarder(num) {
    let sum = 0
    for (let i = 0; i < num + 1; ++i) {
        sum = sum + i
    }
    return sum
}

console.log(addtionButHarder(494908))

function addtion(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; ++i) {
        sum = sum + arr[i]
    }
    return sum
}

console.log(addtion([100,200,500]))

function tryIng(arr) {
    return arr[arr.length - 1]
    }
    
    console.log(tryIng([2,3,1,'poo']))
    
    function lastElem(arr) {
        let sum = -1
        for (let i = 0; i < arr.length; ++i) {
            sum = sum + 1
        }
        return arr[sum]
    }
    
    console.log(lastElem([1,,'boo',1,1000]))
    
    function fuckYou(arr) {
        return arr.length
    }
    
    console.log(fuckYou([1,2,3,4]))
    
    function filterfalsey(elem1,elem2) {
        return elem1 = !!elem1 == false ? elem1 : elem2
    }
    
    console.log(filterfalsey(10,500))