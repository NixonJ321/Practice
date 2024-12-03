async function postsByUser(uId) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/POSTS")

  const result = await promise.json()
 
  const posts = result.filter(elem => elem.userId === uId)

  console.log(posts)
}

console.log(postsByUser(6))

async function completedPosts(completed) {
  const promise = await fetch('https://jsonplaceholder.typicode.com/todos')

  const result = await promise.json()

  const sortedPosts = result.filter(elem => elem.completed === completed).slice(0,23)

  console.log(sortedPosts)
}

console.log(completedPosts(false))

