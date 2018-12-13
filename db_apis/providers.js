const database = require("../services/database.js")

const baseQuery =
  'select pid "PID",name "Name",dob "DOB",address "Address",contact_no "Contact_no",aadhar_card "Aadhar_card" from provider'

// const baseQuery = "select * from provider"

async function find(context) {
  let query = baseQuery
  const binds = {}

  if (context.id) {
    binds.pid = context.id

    query += `\nwhere pid = :pid`
  }

  const result = await database.simpleExecute(query, binds)

  const resResult = {
    queryResult: result.rows,
    queryUsed: query
  }

  return resResult
}

async function findByName(context) {
  let query = "select * from provider"

  query += " where Name = '" + context.name + "'"

  console.log(query)

  const dbRes = await database.simpleExecute(query)

  const result = {
    queryResult: dbRes.rows,
    queryUsed: query
  }

  return result
}

module.exports.find = find
module.exports.findByName = findByName
