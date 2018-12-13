const http = require("http")
const express = require("express")
const webServerConfig = require("./config/web-server.js")
//const database = require("./services/database.js")
const router = require("./services/router.js")
const path = require("path")
const bodyParser = require("body-parser")

let httpServer

function initialize() {
  return new Promise((resolve, reject) => {
    const app = express()
    httpServer = http.createServer(app)

    // app.get("/", (req, res) => {
    //   res.end("Hello World!")
    // })
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*")
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      )
      next()
    })

    app.use(bodyParser.json()) // support json encoded bodies
    app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

    app.use("/api", router)

    app.get("/", async (req, res) => {
      // const result = await database.simpleExecute(
      //   "select systimestamp from dual"
      // )
      // const date = result.rows[0].SYSTIMESTAMP
      // res.end("Date: ${date}")
      res.sendFile(path.join(__dirname + "/wwwroot/index.html"))
    })

    httpServer
      .listen(webServerConfig.port)
      .on("listening", () => {
        console.log(`Web server listening on localhost:${webServerConfig.port}`)

        resolve()
      })
      .on("error", err => {
        reject(err)
      })
  })
}

module.exports.initialize = initialize

function close() {
  return new Promise((resolve, reject) => {
    httpServer.close(err => {
      if (err) {
        reject(err)
        return
      }

      resolve()
    })
  })
}

module.exports.close = close
