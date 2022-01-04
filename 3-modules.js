//module
const names = require('./module1')
const sayHi = require('./module2')
const data = require('./6-alternative-flavour')
require('./7-mind-grenade')
console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter) 


