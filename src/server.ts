import express from 'express'
import { adminJs, adminJsRouter } from './adminjs'
import { sequelize } from './database'
import { router } from './routes'

const app = express()

app.use(adminJs.options.rootPath, adminJsRouter)
app.use(express.static('public'))

app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server startet at port ${PORT}`)
  sequelize.authenticate().then(() => {
    console.log('DB Connect sucessfull')
  })
})
