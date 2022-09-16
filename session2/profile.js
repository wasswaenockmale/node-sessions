/**
 * In this file, we are looking at the value pair way of passing 
 * arguments to the commandline.
 */
if(process.argv.length <= 2){
    console.log("You have not entered any argument.")
}else{
    const users = process.argv.slice(2)
    const str = JSON.stringify(users, null, 2)
    // console.log(str)
    users.forEach(user => {
        user.replace(/"/g, "") // This will replace the " in the string with a no character
        // console.log(user)
        const [key, value] = user.split("=")// This is called destructuring in Javascript
        if(key === "name"){
            console.log(`Name: ${value}`)
        }else{
            console.log(`${key}: ${value}`)
        }
    });
}