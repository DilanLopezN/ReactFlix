// src/adminjs/resources.ts
import { ResourceWithOptions } from 'adminjs'
import { Category, Course, Episode } from '../../src/models'
import { categoryResourceOptions } from './category'
import { courseResourceOptions } from './course'
import { episodeResourceFeatures, episodeResourceOptions } from './episode'

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Course,
    options: courseResourceOptions
  },
  {
    resource: Episode,
    options: episodeResourceOptions,
    features: episodeResourceFeatures
  },
  {
    resource: Category,
    options: categoryResourceOptions
  }
]
