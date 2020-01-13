import users from "/users.js";

const getUsersWithFriend = (users, friendName) => {
  users = users.filter(user => user.friends.includes(friendName));
const arrayOfFriends= users.map(member => member.name);
return arrayOfFriends;
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

