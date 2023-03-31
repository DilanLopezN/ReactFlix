import express from 'express'
import { categoriesController } from './controllers/categoriesController'
import { coursesController } from './controllers/coursesController'
const router = express.Router()

//categoires
router.get('/categories', categoriesController.index)

router.get('/categories/:id', categoriesController.show)

//courses
router.get('/courses/featured', coursesController.featured)
router.get('/courses/newest', coursesController.newest)
router.get('/courses/search', coursesController.search)
router.get('/courses/:id', coursesController.show)

export { router }
 