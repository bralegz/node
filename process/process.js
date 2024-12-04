//PROCESS OBJECT IN NODE JS
//GLOBAL OBJECT IN NODEJS
//ACCESSED INSIDE ANY MODULE WITHOUT REQUIRING IT
//WE CAN CAPTURE COMMAND LINE ARGUMENTS WITH IT

console.log("The id of the process is: ", process.pid)
console.log("Version of nodejs is: ", process.versions.node)
//by default captures the path from which node is being executed and the file which I am executing
console.log("Command line arguments", process.argv)
// const [, , firstName, lastName] = process.argv
// console.log("My name is:", firstName, lastName)
console.log("My name is:", process.argv[2], process.argv[3])
