// src/adminjs/resources.ts
import { ResourceWithOptions } from 'adminjs'
import { features } from 'process'
import { Category, Course, Episode, User } from '../../src/models'
import { categoryResourceOptions } from './category'
import { courseResourceFeatures, courseResourceOptions } from './course'
import { episodeResourceFeatures, episodeResourceOptions } from './episode'
import { userResourceOptions } from './user'

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Course,
    options: courseResourceOptions,
    features: courseResourceFeatures
  },
  {
    resource: Episode,
    options: episodeResourceOptions,
    features: episodeResourceFeatures
  },
  {
    resource: Category,
    options: categoryResourceOptions
  },
  {
    resource: User,
    options: userResourceOptions
  }
]
