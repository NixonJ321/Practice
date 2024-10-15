function convertToBool(arr) {
    return arr.map(elem => !!elem)
    }
    
    console.log(convertToBool([1,1000,0,undefined,null,[],'',"boobs", NaN]))
    
    function filterFalsey(arr) {
        let truthyArr = []
        for (let i = 0; i < arr.length; ++i) {
            if (arr[i] != false) {
                truthyArr.push(arr[i])
            }
        }
        return truthyArr
    }
    
    console.log(filterFalsey([0,1,"0",'null','','boobs', 3]))
    
    function noApples(arr) {
        return arr.filter(elem => elem !== 'apple')
    }
    
    
    console.log(noApples(['banana', 'apple', 'orange','apple', 'kiwi']))
    
    function fuckApples(arr) {
        let noApples = []
     for (let i = 0; i < arr.length; ++i) {
        if(arr[i] !== 'apples'){
            noApples.push(arr[i])
        }
     }
     return noApples
    }
    
    console.log(fuckApples(['apples','banana','money','apples','orange']))