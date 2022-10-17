const sum = (a,b)=>{
    return a+b
}

const PI = 3.14;

class SomeMathObject{
    constructor(){
        console.log("This is a class")
    }

    [1+2](){
        return "three"
    }

    ["add"](a,b){
        return a+b
    }
}

// module.exports.sum = sum
// module.exports.PI = PI
// module.exports.SomeMathObject = SomeMathObject

module.exports = {sum: sum, PI : PI, SomeMathObject: SomeMathObject}