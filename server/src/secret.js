require('dotenv').config()

const serverPort = process.env.SERVER_PORT || 3001;
const mongodbURL = process.env.MONGODB_ATLAS || 'mongodb://localhost:27017/ecommerceMernDB'

const defaultImgPath = process.env.DEFAULT_IMG_PATH || '../public/images/logo.png'

module.exports = {
    serverPort, mongodbURL, defaultImgPath
}