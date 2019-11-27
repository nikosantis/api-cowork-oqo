const db = require('../lib/adapter')

function list () {
  return db.get('about').value()
}

module.exports = {
  list
}
