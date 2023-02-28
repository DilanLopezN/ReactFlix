import { Request, Response } from 'express'
import { getPaginatonParams } from '../helpers/getPaginationParams'
import { categoryService } from '../services/categoryService'
export const categoriesController = {
  // GET /categories
  index: async (req: Request, res: Response) => {
    const [page, perPage] = getPaginatonParams(req.query)
    try {
      const paginatedCategories = await categoryService.findAllPaginated(
        page,
        perPage
      )

      return res.json(paginatedCategories)
    } catch (error) {
      console.error('Erro Categories Get', error)
    }
  },

  // GET /categories/:id
  show: async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      const category = await categoryService.findByIdWithCourses(id)
      return res.json(category)
    } catch (error) {
      console.error('Erro Categories Get With ID', error)
    }
  }
}
