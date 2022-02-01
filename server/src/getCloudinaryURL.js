const axios = require("axios");
const fs = require("fs");
const path = require('path')
const { createCanvas, registerFont } = require("canvas");
const cloudinary = require("cloudinary").v2;
require("dotenv").config({path: path.resolve(__dirname + `/../.env`)});

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const getCloudinaryURL = async (font) => {
    const fontPath = path.resolve(__dirname + `/../fonts/${font}.ttf`)
    try {
        await downloadFont(font, fontPath) //this function downloads the font from googleapis
        const imagePath = await generateImage(font, fontPath)
        const uploadResponse = await cloudinary.uploader.upload(imagePath, {use_filename: true, unique_filename: false})

        console.log(`${font} image uploaded: `, uploadResponse.url)
        return uploadResponse.url
    } catch (error) {
        console.log(error)
    }
}

const generateImage = async (font, fontPath) => {
const fontLowerCase = font.toLowerCase() //this just makes the font name lowercase

  try {
    registerFont(fontPath, {
      family: font
    });
  } catch (error) {
    console.log(error)
  }

  const canvas = createCanvas(2000, 2000);
  const ctx = canvas.getContext("2d");
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `bold 320px "${font}"`;
  ctx.fillText(fontLowerCase, 1000, 200, 2000);
  console.log(`${font} image generated.`);
  const imagePath = __dirname + `/../images/${fontLowerCase}.png`

  //writeFileSync approach:
  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync(imagePath, buffer)

  return imagePath
};

const downloadFont = async (font, fontPath) => {
    const url = await getStyleSheetURL(font);
    console.log(`${font} url: `, url);
    try {
      console.log(fontPath)
      const file = fs.createWriteStream(fontPath)
      const response = await axios.get(url, { responseType: "stream" });
      await response.data.pipe(file);

      return new Promise((resolve, reject) => {
        file.on('finish', resolve)
        file.on('error', reject)
      })
    } catch (error) {
      console.log(error);
    }
}


const getStyleSheetURL = async (font) => {
    const response = await axios.get(
      `https://fonts.googleapis.com/css?family=${font}`
    );
    const styleSheet = response.data;
    const pattern = /(?<=\()([^)]+)(?=\))/g;
    const url = styleSheet.match(pattern)[0];
    return url;
};

  module.exports = getCloudinaryURL