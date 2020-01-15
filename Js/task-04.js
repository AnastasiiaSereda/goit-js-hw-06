import users from "/usersfirst.js";

const getInactiveUsers = users => {
    return users.filter(user =>{
        return user.isActive !== true;
    });
  };
  
  console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]