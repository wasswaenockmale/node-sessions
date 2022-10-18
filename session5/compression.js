const fs = require('fs');

const readStream = fs.createReadStream("./tutorial/example.txt","utf8");
const writeFile = fs.createWriteStream("./tutorial/example2.txt");

readStream.pipe(writeFile)
// readStream.on("data",(err,chuck)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(chuck)
//     }
// })