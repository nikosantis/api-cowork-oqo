const db = require('../lib/adapter')

function list () {
  return db.get('sliders').value()
}

module.exports = {
  list
}
