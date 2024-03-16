
const app = require('./app')
const connectDatabase = require('./config/db')

const { serverPort } = require('./secret')



app.listen(serverPort, async () => {
  console.log(`Example app listening on port ${serverPort}`)
  await connectDatabase()
})