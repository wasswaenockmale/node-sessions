if(process.argv.length <= 2){
    console.log("You have entered little arguments for the shop")
}else{
    const arrArgs = process.argv.slice(2) // This slice removes the first two arguments of the commandline.
    // console.log(JSON.stringify(arrArgs, null, 2))
    arrArgs.forEach(element => {
        // first split the element with '=' signs 
        const item = element.split('=')
        console.log(`${item[1]} is on the shopping list`)
    });
}