const path = require('path')
const cloudinary = require("cloudinary").v2;
require("dotenv").config({path: path.resolve(__dirname + `/../../.env`)});

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const searchCloudinary = async (font) => {
    try {
        const response = await cloudinary.search.expression(`filename=${font.toLowerCase()}`).execute()
        result = response.total_count > 0 ? response.resources[0].url : ""
        return result
    } catch (error) {
        console.log(error)  
    }
}

module.exports = searchCloudinary
