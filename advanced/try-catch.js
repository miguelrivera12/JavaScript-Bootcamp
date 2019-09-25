const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25
    } else {
        throw Error('Argument must be a number')
    }
}

try {
    const resutl = getTip(10)
    console.log(resutl)
} catch (e) {
    console.log('catch block is running')
}

