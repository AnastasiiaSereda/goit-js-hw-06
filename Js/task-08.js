import users from "/users.js";

const getUsersWithFriend = (users, friendName) => {
  users = users.reduce((acc, member) => {
    member.friends.includes(friendName) && acc.push(member.name);
    return acc;
  }, []);
  return users;
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]