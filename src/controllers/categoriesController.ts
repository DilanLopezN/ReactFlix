import { Request, Response } from 'express'
import { Category } from '../models'
export const categoriesController = {
  index: async (req: Request, res: Response) => {
    try {
      const categories = await Category.findAll({
        attributes: ['id', 'name', 'position'],
        order: [['position', 'ASC']]
      })
      return res.json(categories)
    } catch (error) {
      console.error('Erro Categories Get', error)
    }
  }
}
