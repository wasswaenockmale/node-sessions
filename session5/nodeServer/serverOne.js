// To create a server in node, we use the 'http' module 
const http = require("http");

const server = http.createServer((req, res)=>{
    // res.write("First server, hello.");
    // // to send the response, we use
    // res.end();
    if(req.url == "/"){
        res.write("First server, hello.");
        res.end();
    }else{
        res.write("Not domain");
        res.end();
    }
});

// Now, give the port to which the server will serve.
server.listen(3000)