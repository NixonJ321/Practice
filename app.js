let emailRef = document.querySelector(".email");
console.log(emailRef);

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

  const emailRef = document.querySelector('.email')

async function main() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await response.json()
    console.log(data)
    emailRef.innerHTML = data.email
} 

main()