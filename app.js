async function postsByUser(completed) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = await promise.json();

   const filteredUserId = result.filter((element) => element.completed === completed).slice(0,6)
   console.log(filteredUserId)
}

postsByUser(false);
