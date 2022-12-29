import express from 'express'
import { sequelize } from './database'

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server startet at port ${PORT}`)
  sequelize.authenticate().then(() => {
    console.log('DB Connect sucessfull')
  })
})
