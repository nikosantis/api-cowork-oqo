const slidersModel = require('../models/slidersModel')
const boxIconsModel = require('../models/boxIconsModel')
const aboutModel = require('../models/aboutModel')
const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Sliders {
    id: ID
    src: String
    title: String
    text: String
  }

  type BoxIcons {
    id: ID
    src: String
    title: String
    text: String
  }

  type About {
    id: ID
    src: String
    title: String
    list: [String]
  }

  type Query {
    "Devuelve los Sliders"
    getSliders: [Sliders]
    "Devuelve los BoxIcons"
    getBoxIcons: [BoxIcons]
    "Devuelve la información de About"
    getAbout: [About]
  }
`

const resolvers = {
  Query: {
    getSliders() {
      return slidersModel.list()
    },
    getBoxIcons() {
      return boxIconsModel.list()
    },
    getAbout() {
      return aboutModel.list()
    }
  }
}

module.exports = {
  typeDefs,
  resolvers
}
