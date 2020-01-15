
import users from "/usersfirst.js";

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color); 
  };

  
  console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]