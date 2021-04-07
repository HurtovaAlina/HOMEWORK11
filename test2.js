const http= require("http");// module to create http server
const greeting  = require('./personalmodule'); // module to get information about os
const os = require("os"); // module to get information about  files

http.createServer( function(request, response) {
// Send the HTTP header with HTTP Status: 200=OK, Content Type: text/plain
 response.writeHead(200, {'Content-Type': 'text/html'});
    // Send the response body as "Testing NodeJS server"
let user =os.userInfo().username;

    response.write("Date of request: " + greeting.date);
    response.write("<br>");
    response.write(greeting.showGreeting(user));
    response.end();
 }).listen(8000);
 
 // Console will print the message
 console.log('Server running at http://localhost:8000/');