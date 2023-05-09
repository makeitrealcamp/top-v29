const table = require("@makeitrealcamp/db-mock")

const r1 = table.insert({ name: 'cristian' })

function getAllData() {
  const records = table.findAll()

  return records
}

function getDataById(id) {
  const record = table.findById(id)

  return record
}

function createData(data) {
  const record = table.insert(data)

  return record
}

function updateData(id, data) {
  const dataToUpdate = {
    id,
    ...data,
  }

  const record = table.update(dataToUpdate)

  return record
}

function deleteData(id) {
  const record = table.remove(id)

  return record
}

function getLength() {
  const records = table.findAll()
  return records.length
}

module.exports = {
  getAllData,
  getDataById,
  createData,
  updateData,
  deleteData,
  getLength,
}
