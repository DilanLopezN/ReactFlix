import { Request, Response } from 'express'
import { courseService } from '../services/coursesService'
export const coursesController = {
  // Get /courses/featured
  featured: async (req: Request, res: Response) => {
    try {
      const featuredCourses = await courseService.getRandomFeaturedCourses()
      return res.json(featuredCourses)
    } catch (error) {
      console.error('Erro Courses Get With ID', error)
    }
  },
// Get /courses/newest
 newest: async (req: Request, res: Response) => {
    try {
     const newestCourses = await courseService.getTopTenNewest()
     return res.json(newestCourses)
    } catch (error) {
      console.error('Erro Courses Get With ID', error)
    }
  },



  // GET /courses/:id
  show: async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      const course = await courseService.findByIdWithEpisodes(id)
      return res.json(course)
    } catch (error) {
      console.error('Erro Courses Get With ID', error)
    }
  }
}
