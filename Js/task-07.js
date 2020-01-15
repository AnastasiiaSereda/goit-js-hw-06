
import users from "/usersfirst.js";

const calculateTotalBalance = users => {
    
    users = users.reduce((acc, value) => {
            return acc + value.balance;
          }, 0);
          return users;
    
  };
  
  console.log(calculateTotalBalance(users)); // 20916

