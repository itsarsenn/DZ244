const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const port = process.env.PORT || 3000
const app = express()

const UserShema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

const Model = mongoose.model('users', UserShema)

mongoose.connect(process.env.URL_MONGODB)

app.get('/users', async (req, res) => {
    try {
      const users = await UserShema.find({})

      const user = await Model.findOne({_id: '59b99db4cfa9a34dcd7885b7'})
      
      const use = await Model.find().sort({name: 1})

      console.log(users)

      console.log(user)
      
      console.log(use)
      
      res.send({users, user, use})
     
    } catch (err) {
      console.error(err)
    }
  })

    app.listen(port, () => {
        console.log(`server is running on port ${port}`)
    })