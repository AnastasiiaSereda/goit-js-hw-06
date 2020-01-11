
import users from "/users.js";

  const getUserNames = users => {
      users = users.map(user => user.name);
      return users;
    };

  
  console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]