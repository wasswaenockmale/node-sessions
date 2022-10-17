const readLine = require("readline")
console.log(readLine)

// now create the interface 
const r1 = new readLine.createInterface({input: process.stdin, output: process.stdout})

const num1 = Math.floor((Math.random()*10) + 1)
const num2 = Math.floor((Math.random() * 10) + 1)
const ans = num1 + num2
// now create the question 
r1.question(`What is the ${num1} + ${num2}\n`,(userInput)=>{
    if(userInput.trim() == ans){
        r1.close()
    }else{
        r1.setPrompt("Wrong answer\n")
        r1.prompt()
        r1.on("line",()=>{
            if(userInput.trim() == ans){
                r1.close()
            }else{
                r1.setPrompt("Your answer is wrong\n")
                r1.prompt()
            }
        })
    }
})

r1.on("close",()=>{
    console.log("Correct!!!")
})