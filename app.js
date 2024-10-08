function reverseString(str) {
    let reverseStr = ''
    for (i = 0; i < str.length; ++i)
        reverseStr = str[i] + reverseStr
    return reverseStr
}

console.log(reverseString("Nixon"))

function Zeros(arr) {
    for ( i = 0; i < arr.length; ++i) 
        arr[i] = 0
    return arr

   
}

console.log(Zeros([1,2,4,5,6]))