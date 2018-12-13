const database = require("../services/database.js")

async function find(query) {
  // console.log(query)
  const result = await database.simpleExecute(query)
  return result
}

module.exports.find = find
