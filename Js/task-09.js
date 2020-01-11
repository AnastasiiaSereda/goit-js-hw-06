
import users from "/users.js";


const getNamesSortedByFriendsCount = users => {

    users = users.sort((a, b) => (a.friends.length < b.friends.length ? -1 : 1)).map(member=> member.name);
    
    return users;

};
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

 