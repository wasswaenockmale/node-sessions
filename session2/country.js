const args = require("minimist")(process.argv.slice(2))
console.log(args)
console.log(args.name)
console.log(args.capital)
console.log(args.population)

// When used minimist 
// This turns the process.argv to an Object, which then makes key acess very easy.
// node country --name=Uganda --capital=Kampala --populatoin=44M