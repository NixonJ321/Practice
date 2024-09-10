function getMax(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; ++i) {
       if(max < arr[i]) {
        max = arr[i]
       }
    }
    return max
}

console.log(getMax([-100,-20000,-100]))

function calcTime(time) {
    let min = Math.floor(time / 60)
    let sec = time % 60  
    if ( min < 10) {
        min = '0' + min
    }
    if ( sec < 10) {
        sec = '0' + sec
    }
    return min + ':' + sec
}

console.log(calcTime(549))

