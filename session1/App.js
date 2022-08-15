let sum = (a, b)=>{
    if(typeof a !== 'number' || typeof b !== 'number'){
        return "Invalid input"
    }
    return a + b
}

let output = sum(10, 11)
console.log(output)
output = sum(1, "Enock")
console.log(output)