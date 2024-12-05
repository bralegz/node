const http = require('node:http');

//the res argument is the result of making the request
//the res argument works like an event emitter
const request = http.request('http://www.google.com', (res) => {

  //The on function takes the name of of an event as string and a listener as a callback
  res.on('data', chunk => {
    console.log(`Data chunk: ${chunk}`)
  })

  //
  res.on('end', () => {
    console.log('No more data');
  })
})


request.end()