function sortObjects (arr) {

    return arr.sort((a, b) => a.price - b.price)
}

console.log(sortObjects([
    {id:1, price:50},
    {id:2, price:30},
    {id:3, price:60},
    {id:4, price:10},
    {id:5, price:20},
]))

function sortHtoL(arr) {
    return arr.sort((a, b) => a - b)
    
}

console.log(sortHtoL([1,40,-1,-432,109,42,23,100]))

function showRating(num) {
    let ratings = ''
    for (let i = 0; i < Math.floor(num); ++i) {
        if(i !== (Math.floor(num) - 1)) {
            ratings = ratings + '* '
        }
        else {
            ratings = ratings + '*'
        }
    }
    if(!Number.isInteger(num)) {
        ratings = ratings + '.'
    }

    return ratings
}
    
    
    console.log(showRating(4))

    function showRating(num) {
        let rating = ''
        for (let i = 0; i < Math.floor(num); ++i) {
            if(i !== Math.floor(num) - 1) {
                rating = rating + '* '
            }
            else {
                rating = rating + '*'
            }
        }
        if(!Number.isInteger(num)) {
            rating = rating + '.'
        }
        return rating
    }
    
    console.log(showRating(4.5))