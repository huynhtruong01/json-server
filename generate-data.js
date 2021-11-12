var faker = require('faker')

// set local to use Vietnamese
faker.locale = 'vi'

// random data
console.log(faker.commerce.department())
console.log(faker.commerce.productName())
console.log(faker.commerce.productDescription())
