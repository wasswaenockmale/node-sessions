const fs = require("fs")

// fs.writeFile("names.txt","This is the file",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file created successfully")
//     }
// });

// fs.unlink("names.txt",(err)=>{
//     if(err)
//         console.log(err)
//     else
//         console.log("Successfully deleted the file")
// });

// Create the directory
fs.mkdir("tutorial",(err)=>{
    if(err)
        console.log(err)
    else{
        // If the directory is created successfully, then create a file in it
        fs.writeFile("./tutorial/example.js","console.log(\"Hello, world\")",(err1)=>{
            if(err)
                console.log(err1)
            else{
                // If the file is created successfully, then read the file.
                fs.readFile("./tutorial/example.js","utf-8",(err2,file)=>{
                    if(err2)
                        console.log(err2)
                    else{
                        console.log(file)
                    }
                });
            }
        });
    }
});