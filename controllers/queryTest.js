const queryTest = require("../db_apis/queryTest.js")

async function get(req, res, next) {
  try {
    //console.log(req)

    const query = req.query.query

    const result = await queryTest.find(query)

    res.status(201).json(result.rows)
  } catch (err) {
    next(err)
  }
}

module.exports.get = get
