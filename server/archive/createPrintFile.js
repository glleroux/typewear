const http = require("http");
const axios = require("axios");
const fs = require("fs");
const path = require('path')
const { createCanvas, registerFont } = require("canvas");
const uploadPrintFile = require('./uploadPrintFile')

//INPUT
const chosenFont = "Pattaya";

//ACCESS FONT RESOURCE VIA @IMPORT STYLSHEET
const getStyleSheetURL = async (fontFamily) => {
  const response = await axios.get(
    `https://fonts.googleapis.com/css?family=${fontFamily}`
  );
  const styleSheet = response.data;
  const pattern = /(?<=\()([^)]+)(?=\))/g;
  const url = styleSheet.match(pattern)[0];
  return url;
};

//DOWNLOAD FONT
const getFont = async (fontFamily) => {
  const url = await getStyleSheetURL(fontFamily);
  try {
    const response = await axios.get(url, { responseType: "stream" });
    await response.data.pipe(
      fs.createWriteStream(path.resolve(__dirname + `/../fonts/${fontFamily}.ttf`))
    );
    console.log(`${fontFamily}.ttf downloaded.`);
  } catch (error) {
    console.log(error);
  }
};

//GENERATE IMAGE
const generateImage = (words, fontFamily) => {
  try {
    registerFont(path.resolve(__dirname + `/../fonts/${fontFamily}.ttf`), {
      family: fontFamily
    });
  } catch (error) {
    console.log(error)
  }
  const canvas = createCanvas(2000, 2000);
  const ctx = canvas.getContext("2d");
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `bold 320px "${fontFamily}"`;
  ctx.fillText(words, 1000, 200, 2000);
  console.log(`${fontFamily} image generated.`);
  return canvas;
};

//SAVE IMAGE
const saveImage = (canvas, fontFamily) => {
  const out = fs.createWriteStream(__dirname + `/../images/${fontFamily}.png`);
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on("finish", () => console.log(`${fontFamily} image saved`));
};

//DELETE FONT FILE
const deleteFont = (fontFamily) => {
  try {
    fs.unlinkSync(__dirname + `/../fonts/${fontFamily}.ttf`);
    console.log(`${fontFamily}.ttf deleted.`);
  } catch (err) {
    console.error(err);
  }
};

//MAIN FUNC
const createPrintFile = async (fontFamily) => {
  const fontFamilyLow = fontFamily.toLowerCase();
  await getFont(fontFamily);
  
    try {
      saveImage(generateImage(fontFamilyLow, fontFamily), fontFamilyLow);
    } catch (error) {
      console.log(error)
    }
 
    deleteFont(fontFamily);

  try {
    
      const printFileURL = await uploadPrintFile(fontFamilyLow)
      return printFileURL
   
  } catch (error) {
    console.log(error)
  }
};  

module.exports = createPrintFile

//ALTERNATE HARDCODED URL FROM GITHUB
// const googleFontGithubURL =
//   "http://github.com/google/fonts/blob/main/ofl/" +
//   chosenFont.toLowerCase() +
//   "/" +
//   chosenFont +
//   "-Regular.ttf?raw=true";
