const fs = require('fs')

const input = fs.readFileSync('./input')

const main = (() => console.log(
    input
        .toString()
        .split('\n')
        .map(e => parseInt(e))
        .reduce((a, b) => { console.log(a + b); return a + b })
))()