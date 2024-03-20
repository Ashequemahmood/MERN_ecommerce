require('dotenv').config()

const serverPort = process.env.SERVER_PORT || 3001;
const mongodbURL = process.env.MONGODB_ATLAS || 'mongodb://localhost:27017/ecommerceMernDB'

const defaultImgPath = process.env.DEFAULT_IMG_PATH || '../public/images/logo.png'

const jwtActivationKey = process.env.JWT_ACTIVATION_KEY || 12;
const smtpUsername = process.env.SMTP_USERNAME || '';
const smtpPassword = process.env.SMTP_PASSWORD || '';
const clientUrl = process.env.CLIENT_URL


module.exports = {
    serverPort, mongodbURL, defaultImgPath, jwtActivationKey, smtpUsername, smtpPassword, clientUrl
}