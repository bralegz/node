//FS MODULE
//THE FILE SYSTEM MODULE (fs) ALLOWS YOU TO WORK WITH THE FILE SYSTEM ON YOUR COMPUTER

const fs = require("node:fs")

/////////////////////////// READ FILES ///////////////////////////////////////////////////

console.log('first')
//THIS IS THE SYNC WAY OF READING FILES
const fileContents = fs.readFileSync("./file.txt", "utf-8")
console.log(fileContents);

console.log('second');


//THIS IS THE  ASYNC WAY OF READING FILES
//THIS PATTERN OF PASSING A CALLBACK FUNCTION WITH THE ERROR AS THE FIRST ARGUMENT IS CALLED ERROR FIRST CALLBACK PATTEN
fs.readFile("./file.txt", "utf-8",(error, data) => {
  if(error) {
    console.log(error)
  } else {
    console.log(data)
  }
})

console.log('third')


/////////////////////////// WRITE FILES ///////////////////////////////////////////////////
fs.writeFileSync("./greet.txt", "Hello again unicode")

// BY DEFAULT THE SECOND WRITE WILL OVERWRITE THE FIRST ONE. YOU CAN ADD A FLAG AS THE THIRD ARGUMENT IF YOU WANT TO APPEND INSTEAD OF OVERWRITE
fs.writeFile("./greet.txt", "Hello, Vishas@", {flag: "a" }, (error) => {
  if(error) {
    console.log(error)
  } else {
    console.log("File written")
  }
})