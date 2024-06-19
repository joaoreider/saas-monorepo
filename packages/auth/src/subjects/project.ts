import { z } from 'zod'

import { ProjectSchema } from '../models/project'

export const projectSubject = z.tuple([
  z.union([
    z.literal('create'),
    z.literal('delete'),
    z.literal('manage'),
    z.literal('get'),
    z.literal('update'),
  ]),
  z.union([z.literal('Project'), ProjectSchema]),
])
export type ProjectSubject = z.infer<typeof projectSubject>
