const http = require('node:http');

const req = http.get('http://www.google.com', (res) => {
  res.on('data', (data) => {
    console.log(`Data chunk: ${data}`);
  });

  res.on('end', () => {
    console.log('no more data');
  });
});


