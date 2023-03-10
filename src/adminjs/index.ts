import Adminjs from 'adminjs'
import AdminJsExpress from '@adminjs/express'
import AdminJsSequelize from '@adminjs/sequelize'
import { sequelize } from '../database'
import { adminJsResources } from '../../.adminjs/resources'

import bcrypt from 'bcrypt'
import { locale } from './locale'
import { Category, Course, Episode, User } from '../models'

Adminjs.registerAdapter(AdminJsSequelize)

export const adminJs = new Adminjs({
  databases: [sequelize],
  rootPath: '/admin',
  resources: adminJsResources,
  dashboard: {
    component: Adminjs.bundle('./components/Dashboard'),
    handler: async (req, res, context) => {
      const courses = await Course.count()
      const episodes = await Episode.count()
      const category = await Category.count()
      const standardUsers = await User.count({ where: { role: 'user' } })

      res.json({
        Cursos: courses,
        Episódios: episodes,
        Categorias: category,
        Usuários: standardUsers
      })
    }
  },
  locale: locale,
  branding: {
    companyName: 'ReactFlix',
    logo: '/reactflix.svg',
    theme: {
      colors: {
        primary100: '#ff0043',
        primary80: '#ff1a57',
        primary60: '#ff3369',
        primary40: '#ff4d7c',
        primary20: '#ff668f',
        grey100: '#151515',
        grey80: '#333333',
        grey60: '#4d4d4d',
        grey40: '#666666',
        grey20: '#dddddd',
        filterBg: '#333333',
        accent: '#151515',
        hoverBg: '#151515'
      }
    }
  }
})
export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(
  adminJs,
  {
    authenticate: async (email, password) => {
      const user = await User.findOne({ where: { email } })

      if (user && user.role === 'admin') {
        const matched = await bcrypt.compare(password, user.password)

        if (matched) {
          return user
        }
      }
      return false
    },
    cookiePassword: 'senhacookie'
  },
  null,
  {
    resave: false,
    saveUninitialized: false
  }
)
