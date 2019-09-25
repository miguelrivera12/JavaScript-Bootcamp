const products = ['some item']
const product = products[0]

// Truthy - values thar resolve to true in a boolean context
// Falsy - values that resolve to false in a boolean context
// Falsy values - false, 0, empty string, null, undefined

if (undefined) {
    console.log('Product found')
} else {
    console.log('Product not found')
}