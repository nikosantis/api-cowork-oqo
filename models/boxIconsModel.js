const db = require('../lib/adapter')

function list () {
  return db.get('boxIcons').value()
}

module.exports = {
  list
}
