const { forEachRight } = require('lodash')
const lodash = require('lodash')

const result = lodash.add(1,34)
const arr = [23,3,5,6,28,9,10,29,18]

console.log(result)
console.log(lodash.chunk([1,2,4,5,6], 2)) // Creating chucks of an array
console.log(lodash.difference([1,3],[2,3]))

// If you want to iterate through the array from the right most value.
lodash.forEachRight(arr, (value)=>{
console.log(value)
})