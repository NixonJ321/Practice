function sortObjects(arr) {
    let sortedObjects = arr.sort((a, b) => a.price-b.price)
    return sortedObjects
    } 
    
    console.log(sortObjects
        ([
            {id:1, price: 50},
            {id:2, price: 0},
            {id:3, price: 500},
        ])
    )

    function sortObjects(arr) {
        let sortedObjects = arr.sort(({price:a}, {price: b}) => a-b)
        return sortedObjects
        } 
        
        console.log(sortObjects
            ([
                {id:1, price: 50},
                {id:2, price: 0},
                {id:3, price: 500},
            ])
        )
    
    function sortHtoL(numbers) {
        numbers.sort((a, b) => a - b)
        return numbers
    }
    
    console.log(sortHtoL([3,-10000,756,2149312,2,100]))
    
    function ratingSys(rating) {
        let ratings = ''
        for (let i = 0; i < Math.floor(rating); ++i) {
           ratings = ratings + '*'
           if (i !== Math.floor(rating) - 1) {
            ratings = ratings + ' '
           }
        }
           if (!Number.isInteger(rating)) {
            ratings = ratings + ' .'
           }
        return ratings
    }
    
    console.log(ratingSys(4.5))
    
