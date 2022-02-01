const cloudinary = require("cloudinary").v2;
const path = require('path')
require("dotenv").config({path: path.resolve(__dirname + `/../.env`)});

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const uploadPrintFile = async (printFile) => {
  try {
    const uploadResponse = await cloudinary.uploader.upload(path.resolve(__dirname + `/../images/${printFile}.png`))
    console.log(uploadResponse)
    return uploadResponse.url
  } catch (error) {
    console.log(error)
  }
}

module.exports = uploadPrintFile
