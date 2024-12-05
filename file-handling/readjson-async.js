const fs = require('fs');

fs.readFile('./data.json', 'utf-8', (err, rawData) => {
  if(err) {
    console.error(err);
    return;
  }
  
  const data = JSON.parse(rawData);
  console.log(data);
  
})