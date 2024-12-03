function sortHighToLow(arr) {
  let sortedObj = arr.sort((a, b) => (b.price - a.price))
  return sortedObj
}


console.log(sortHighToLow([
  {id: 1, price: 50},
  {id: 2, price: 500},
  {id: 3, price: 10},
  {id: 4, price: 30},
  {id: 5, price: 65},
  {id: 6, price: 99},
]))


function sortlowToHigh(arr) {
  let sortedarr = arr.sort((a, b) => (a - b))
  return sortedarr
}

console.log(sortlowToHigh([1,-203,-2,100,99,23,-34,374]))

function showRating(num) {
  let rating = ''
  for (let i = 0; i < Math.floor(num); ++i) {

    if (i !== (Math.floor(num) - 1)) {
      rating = rating + '* '
    }

    else (rating = rating + '*')
  }
  if(!Number.isInteger(num)) {
    rating = rating + '.'
  }
  return rating
}

console.log(showRating(4.5))