const providers = require("../db_apis/providers.js")

async function get(req, res, next) {
  try {
    const context = {}

    context.id = parseInt(req.params.id, 10)

    const rows = await providers.find(context)

    if (req.params.id) {
      if (rows.length === 1) {
        res.status(200).json(rows[0])
      } else {
        res.status(404).end()
      }
    } else {
      res.status(200).json(rows)
    }
  } catch (err) {
    next(err)
  }
}

module.exports.get = get

async function getByName(req, res, next) {
  try {
    const context = {}

    if (req.query.name) {
      console.log("success")
      context.name = req.query.name
    }
    const rows = await providers.findByName(context)

    if (req.params.id) {
      if (rows.length === 1) {
        res.status(200).json(rows[0])
      } else {
        res.status(404).end()
      }
    } else {
      res.status(200).json(rows)
    }
  } catch (err) {
    next(err)
  }
}

module.exports.getByName = getByName
