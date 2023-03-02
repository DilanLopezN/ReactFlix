import { Request, Response } from 'express'
import { courseService } from '../services/coursesService'
export const coursesController = {
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
