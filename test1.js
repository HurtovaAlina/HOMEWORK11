const http= require("http");// module to create http server
const os = require('os'); // module to get information about os
const path = require('path'); // module to get information about  files

http.createServer( function(request, response) {
// Send the HTTP header with HTTP Status: 200=OK, Content Type: text/plain
 response.writeHead(200, {'Content-Type': 'text/html'});
    // Send the response body as "Testing NodeJS server"

    response.write('<h1> System information </h1>\n');
    response.write("Current user name: " + os.userInfo().username);
    response.write("<br>");
    response.write("OS type: " + os.type());
    response.write("<br>");
    response.write("System work time: " + (os.uptime()/60) + "minutes");
    response.write("<br>");
    response.write("Current work directory: " + path.dirname(__filename));
    response.write("<br>");
    response.write("Server file name: " + path.basename(__filename));
    response.write("<br>");
    response.end();
 }).listen(5000);
 
 // Console will print the message
 console.log('Server running at http://localhost:5000/');