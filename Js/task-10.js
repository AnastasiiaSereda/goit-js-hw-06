
import users from "/usersfirst.js";


const getSortedUniqueSkills = users => {
const arrayOfSkills = users.flatMap(element => {   
        return element.skills;
      });
      const uniqueSkills = arrayOfSkills.filter((item, index) => arrayOfSkills.indexOf(item) === index).sort();
      return  uniqueSkills;
  };
  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]


// ------------------------ Version two ----------------------------


const getSortedUniqueSkills = users => {
    const arrayOfSkills = users.flatMap(element => {   
            return element.skills;
          });
           const uniqueSkills = [...new Set(arrayOfSkills)].sort();
           return  uniqueSkills;
      };
      
      console.log(getSortedUniqueSkills(users));
      // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
    