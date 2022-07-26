import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ChatRecordCreateArgs>({
  chatRecord: {
    one: {
      data: {
        message: 'String',
        createdBy: {
          create: {
            username: 'String5099755',
            hashedPassword: 'String',
            salt: 'String',
            role: 'String',
          },
        },
        conversation: { create: { title: 'String' } },
      },
    },
    two: {
      data: {
        message: 'String',
        createdBy: {
          create: {
            username: 'String1698086',
            hashedPassword: 'String',
            salt: 'String',
            role: 'String',
          },
        },
        conversation: { create: { title: 'String' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
