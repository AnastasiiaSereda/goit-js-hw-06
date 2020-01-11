
import users from "/users.js";

const getUsersWithGender = (users, gender) => {
    users = users.filter(user => user.gender === gender);
    return users;
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]