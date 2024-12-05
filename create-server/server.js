const http = require('http');

const PORT = 3000;

//the req is a readable stream which we can listen to for data
//the res is a writable stream
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  //it signals that the response, incluindg the headers and any other data we want to pass is now complete and ready to send back
  //this end function needs to be called on each request that comes to the server. Even if its empty.
  res.end(JSON.stringify({ id: 1, name: 'Sir Isaac Newton is your friend' }));
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
