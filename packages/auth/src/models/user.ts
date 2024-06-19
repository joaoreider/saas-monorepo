import { z } from 'zod'

import { role } from '../roles'

export const UserSchema = z.object({
  id: z.string(),
  role,
})

export type User = z.infer<typeof UserSchema>
