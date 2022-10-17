const fs = require("fs")

fs.writeFile("names.txt","This is the file",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file created successfully")
    }
});