// Now first require the necessary modules.
const http = require("http");
const fs = require("fs");

http.createServer((req,res)=>{
    const readfile = fs.createReadStream("./staticFiles/index.html");
    // const readfile1 = fs.createReadStream("./staticFiles/name.json");

    // Now name the content type that should be expected in the req.
    if(req.url === "/"){
        res.writeHead(200, "content-type: text/html");
        // res.writeHead(200,"content-type: application/json")
        readfile.pipe(res);
    }else{
        res.write("Data not found! Wrong domain")
        res.end();
    }
}).listen(3001)