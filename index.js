const express = require('express')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express')
const { resolvers, typeDefs } = require('./lib/schema')

const PORT = process.env.PORT || 3500
const app = express()
const { sliders, boxIcons, about } = require('./lib/db.json')

app.use(cors())

require('./lib/adapter')

const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs,
  resolvers,
})

const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }
  const { status } = err
  res.status(status).json(err)
}
app.use(errorHandler)
server.applyMiddleware({ app, path: '/graphql' })

app.get('/sliders', function (req, res) {
  res.send(sliders)
})

app.get('/boxIcons', function (req, res) {
  res.send(boxIcons)
})

app.get('/about', function (req, res) {
  res.send(about)
})

if (!process.env.NOW_REGION) {
  app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}/graphql`)
  })
}

module.exports = app
