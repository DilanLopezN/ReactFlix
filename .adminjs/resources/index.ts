import { ResourceWithOptions } from 'adminjs'
import { Category, Course } from '../../src/models'
import { categoryResourceOptions } from './category'
import { courseResourceOptions } from './course'

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Course,
    options: courseResourceOptions
  },
  {
    resource: Category,
    options: categoryResourceOptions
  }
]
