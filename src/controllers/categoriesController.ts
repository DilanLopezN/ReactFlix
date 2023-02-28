import { Request, Response } from 'express'
import { categoryService } from '../services/categoryService'
export const categoriesController = {
  index: async (req: Request, res: Response) => {
    const { page, perPage } = req.query

    const perPageNumber =
      typeof perPage === 'string' && parseInt(perPage, 10) > 0
        ? parseInt(perPage, 10)
        : 10

    const pageNumber =
      typeof page === 'string' && parseInt(page, 10) > 0
        ? parseInt(page, 10)
        : 1
    try {
      const paginatedCategories = categoryService.findAllPaginated(
        pageNumber,
        perPageNumber
      )

      return res.json(paginatedCategories)
    } catch (error) {
      console.error('Erro Categories Get', error)
    }
  }
}
