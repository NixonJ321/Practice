let users = [{
  username: "nixon",
  email: "nixon@gmail.com",
  password: "password1",
  subStatus: "VIP",
  discordId: "Mike",
  lessonsCompleted: "13",}]

let user = {
  username: "nixon",
  email: "nixon@gmail.com",
  password: "password1",
  subStatus: "VIP",
  discordId: "Mike",
  lessonsCompleted: "13",
};

function register(
  name,
  email,
  password,
  subStatus,
  discordId,
  lessonsCompleted
) {
  let user = {
    username: name,
    email: email,
    password: password,
    subStatus: subStatus,
    discordId: discordId,
    lessonsCompleted: lessonsCompleted,
  };
 users.push(user)
}

register("zack", "bobvance@vancefiridgeorations.com", "password", "vip", "13");

console.log(users)