import { z } from 'zod'

import { OrganizationSchema } from '../models/organization'

export const organizationSubject = z.tuple([
  z.union([
    z.literal('delete'),
    z.literal('manage'),
    z.literal('update'),
    z.literal('transfer_ownership'),
  ]),
  z.union([z.literal('Organization'), OrganizationSchema]),
])
export type OrganizationSubject = z.infer<typeof organizationSubject>
