import files from "/files.js";
// ------------------ 1 ----------------------
const getFileWithPopularity = (files, popularity) => {
    return files.filter(file => {
        return file.popularity > popularity ;
    });
  };

  console.log(getFileWithPopularity(files, 200));

  // ------------------ 2 ----------------------
const getFileWithYear = (files, year) => {
  return files.filter(file => {
    const filmYear = new Date(file.release_date).getFullYear();

    return  filmYear === year;
  });
};

console.log(getFileWithYear(files, 2020));


 // ------------------ 3 ----------------------
const getFileWithTitle = files => {
  let userChoice = prompt("Insert name of film").toLowerCase();

  return files.filter(file => {
    return file.title.toLowerCase().includes(userChoice);
  });
};

console.log(getFileWithTitle(files));


 // ------------------ 4 ----------------------
const getFileWithConsistentYear = files => {
      return files.sort((a, b) => {
        const aMilliseconds = new Date(a.release_date).getTime();
        const bMilliseconds = new Date(b.release_date).getTime();
    
        return aMilliseconds - bMilliseconds;
        
      });
    };
    
    console.log(getFileWithConsistentYear(files));
    
    
    