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
// fs.mkdir("./tutorial/example",(err)=>{
//     if(err)
//         console.log(err)
//     else{
//         // If the directory is created successfully, then create a file in it
//         fs.writeFile("./tutorial/example/hello.js","console.log(\"Hello, world\")",(err1)=>{
//             if(err)
//                 console.log(err1)
//             else{
//                 // If the file is created successfully, then read the file.
//                 fs.readFile("./tutorial/example/hello.js","utf-8",(err2,file)=>{
//                     if(err2)
//                         console.log(err2)
//                     else{
//                         console.log(file)
//                     }
//                 });
//             }
//         });
//     }
// });

//Now, use the fs file to read the files in the more folder and delete them.
fs.readdir("./tutorial/more/",(err,files)=>{
    if(err)
        console.log(err)
    else{
        for(const file of files){
            fs.unlink("./tutorial/more/"+file, (err1)=>{
                if(err1)
                    console.log(err1)
                else{
                    console.log("Sucessfully deleted the file...")
                }
            })
        }
    }
})