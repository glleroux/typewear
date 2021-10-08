const path = require('path')
require("dotenv").config({path:`${__dirname}/../.env`});

const key = process.env.TEST_VARIABLE

console.log(path.resolve(__dirname + `/../fonts/oswald.ttf`))

// Get font list 
// submit a font (ttf)