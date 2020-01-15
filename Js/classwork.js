import users from "/users.js";
// ------------------ 1 ----------------------
// const getFileWithPopularity = (files, popularity) => {
//     return files.filter(file => {
//         return file.popularity > popularity ;
//     });
//   };

//   console.log(getFileWithPopularity(files, 200));

// ------------------ 2 ----------------------
// const getFileWithYear = (files, year) => {
//   return files.filter(file => {
//     const filmYear = new Date(file.release_date).getFullYear();

//     return  filmYear === year;
//   });
// };

// console.log(getFileWithYear(files, 2020));

// ------------------ 3 ----------------------
// const getFileWithTitle = files => {
//   let userChoice = prompt("Insert name of film").toLowerCase();

//   return files.filter(file => {
//     return file.title.toLowerCase().includes(userChoice);
//   });
// };

// console.log(getFileWithTitle(files));

// ------------------ 4 ----------------------
// const getFileWithConsistentYear = files => {
//       return files.sort((a, b) => {
//         const aMilliseconds = new Date(a.release_date).getTime();
//         const bMilliseconds = new Date(b.release_date).getTime();

//         return aMilliseconds - bMilliseconds;

//       });
//     };

//     console.log(getFileWithConsistentYear(files));




// Вывести всех users у которых имена не начинаются на с или k

// const deleteAllUsersWithNameWhichStartsFromCK = users => {
//   return users.filter(user => {
//     const firstLetter = user.name[0].toLowerCase();
//     return !(firstLetter === "c" || firstLetter === "k");
//   });
// };
// console.log(deleteAllUsersWithNameWhichStartsFromCK(users));



// Забрать users с чётным id
// it does not work yet
// const findUserWithEvenId = (users) => {
//   let evenId = (users.id % 2 === 0);
//   return  users.filter(user => user.id === evenId);
// };
// console.log(findUserWithEvenId(users))



// Вернуть массив только из адрессов юзеров
// it does not work yet
// const email = users.reduce((acc,user) => {
//    acc.push(...user.email);
//   return acc;
// }, [] );

// console.log(email);

// Version two
// const getAllUserEmails = function (users, email) {

//     const newArrayofEmails =[];

//     for (const item of users) {
//         if (email in item) {
//         newArrayofEmails.push(item[email]);
//         }
//     }
//      return newArrayofEmails;
// };
// console.log(getAllUserEmails(users,'email'));



// Вернуть массив в котором имя и фамилия изменили свои позиции наоборот
// it does not work yet
// const getArrayWithReverseName = users => {
// const arrOfUsersName = user.name.split(',');
// return users
//   .forEach(user => 
//     arrOfUsersName.splice(1, 0, arrOfUsersName[0]));
// };
// console.log(getArrayWithReverseName(users));


