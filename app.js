function reserveString(str) {
    return str.split('').reverse().join('')
}

console.log(reserveString('Bingo was his Name Oh!'))
function reserveString(str) {
    let backwardsString = ''
    for (let i = 0; i < str.length; ++i) {
        backwardsString = str[i] + backwardsString
    }
    return backwardsString
}

console.log(reserveString('Bingo was his Name Oh!'))

function boolValve(arr) {
    return arr.map(elem => !!elem)
    }
    
    console.log(boolValve([1,0,null,'sad',[],false,undefined,'']))
    
    function filterFalsey(arr) {
        return arr.filter(elem => !!elem == true)
     
     }
     
     console.log(filterFalsey([1,0,[],NaN,null,undefined,'happy',true]))
     
     function filterApples(arr) {
         return arr.filter(elem => elem !== 'apples')
     
     }
     
     console.log(filterApples(['apples','john','apples','oranges']))
     
     function filterApples(arr) {
         let filteredArr = []
         for ( let i = 0; i < arr.length; ++i) {
             if (arr[i] !== 'apples') {
                 filteredArr.push(arr[i])
             }
             
         }
         return filteredArr
     }
     
     console.log(filterApples(['apples','coke',"apples","steak"]))
     
     
     function reverseString(str) {
         return str.split('').reverse().join('')
     }
     
     console.log(reverseString('Hypothesis'))
     
     function Zeros(arr) {
         for (let i = 0; i < arr.length; ++i) {
           arr[i] = 0
         }
         return arr
     }
     
     console.log(Zeros([1,2,3]))
     
     function reversed(str) {
         let reversedString = ''
         for ( let i = 0; i < str.length; ++i) {
             reversedString = str[i] + reversedString
         }
         return reversedString
     }
     
     console.log(reversed('Nixon'))

