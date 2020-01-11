
import users from "/users.js";

const getUsersWithEyeColor = (users, color) => {
    users = users.filter(user => user.eyeColor === color);
    return users;
  };

  
  console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]