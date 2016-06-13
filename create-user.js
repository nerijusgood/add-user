import express from 'express'
import mongoose from 'mongoose'

import config from '../common/config'
import User from './models/User'

var app = express()
var database = process.env.MONGOLAB_URI || 'mongodb://localhost/roche'

// Start database.
mongoose.connect(database)
mongoose.connection.on('error', () => {
  console.error('Error: Could not connect to MongoDB. Did you forget to run `mongod`?')
})

// Start server.
app.listen(config.apiPort, (err) => {
  if (!err) {
    const user = new User({
      username: 'sve',
      password: 'sve'
    })

    user.save(function(err, user) {
      if (err) {
        console.log(err)
        return
      }

      console.log('User created')
    })
  }
})
