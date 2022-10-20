
const sum = (a,b)=>{
    return a+b
}

const PI = 3.14;
const EventEmitter = require("events")
class SomeMathObject extends EventEmitter{
    constructor(name){
        super()
        // console.log("This is a class")
        this._name = name;
    }


    // [1+2](){
    //     return "three"
    // }

    // ["add"](a,b){
    //     return a+b
    // }
    get name(){
        return this._name;
    }
}

// module.exports.sum = sum
// module.exports.PI = PI
// module.exports.SomeMathObject = SomeMathObject

module.exports = {sum: sum, PI : PI, SomeMathObject: SomeMathObject}
// const obj = new SomeMathObject("Enock")
// console.log(obj)