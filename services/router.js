const express = require("express")
const router = new express.Router()
const providers = require("../controllers/providers.js")
const queryTest = require("../controllers/queryTest.js")

router.route("/providers/show/:id?").get(providers.get)
router.route("/providers/search").get(providers.getByName)

router.route("/queryTest").get(queryTest.get)

module.exports = router
