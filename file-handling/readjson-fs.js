const fs = require('fs');

const rawData = fs.readFileSync('./data.json', 'utf8');
const data = JSON.parse(rawData);

console.log(data.users[0]);