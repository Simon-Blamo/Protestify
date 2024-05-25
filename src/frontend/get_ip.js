const fs = require('fs')
fs.readFile('ip.txt', (err, inputD) => {
    if (err) throw err;
    let ip_start = inputD.toString().search("inet") + 5
    console.log(inputD.toString().substr(ip_start, 10))
})