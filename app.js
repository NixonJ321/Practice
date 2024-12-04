function ConvertToBool(arr) {
  let boolArr = arr.map(elem => !!elem)
  return boolArr
 }

 console.log(ConvertToBool([500,0,'Nixon','',[]]))

 function zero(arr) {
   let newarr = arr.map(elem => 0)
   return newarr 
 }

 console.log(zero([1,2,3]))

 function reverseString(string) {
   let newString = string.split('').reverse('').join('')
   return newString
   }
   
   console.log(reverseString('This is cool!'))
   
   function findLargestNum(arr) {
     let max = arr[0]
     for (let i = 0; i < arr.length; ++i) {
       if (max < arr[i]) {
         max = arr[i]
       }
     }
     return max
     }
     
     console.log(findLargestNum([1000,200,4]))
     
     function calcTime(secs) {
       let calcSecs = secs % 60
       let calcMins = Math.floor(secs / 60)
       if (calcSecs < 10){
         calcSecs = '0' + calcSecs 
       }
       if ( calcMins < 10) {
         calcMins = '0' + calcMins
       }
     
       return calcMins + ':' + calcSecs
     }
     
     console.log(calcTime(3031))
     
     function progressiveSum(num) {
       let sum = 0
       for ( let i = 1; i <= num ; ++i) {
         sum = sum + i
       }
       return sum
     
     }
     
     console.log(progressiveSum(4))
     
     function arrSum(arr) {
       let sum = 0
       for ( let i = 0; i < arr.length ; ++i) {
         sum = sum + arr[i] 
       }
       return sum
     }
     
     console.log(arrSum([1,2,3]))
     
     function lastElem(arr) {
       return arr[arr.length-1]
     }
     
     console.log(lastElem([1,1,4,10,23]))
     
     function arrLength(arr) {
       return arr.length
       } 
       
       console.log(arrLength([1,2,3,10]))
       
       function filterFalsey(elem,elem2) {
         return !elem ? elem : elem2
         }
         
         console.log(filterFalsey(0,500))
