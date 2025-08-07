import { z } from 'zod'
import { config } from 'dotenv'

config()

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error(
    '❌ Erro ao validar variáveis de ambiente:',
    _env.error.format()
  )
  throw new Error('Variáveis de ambiente inválidas.')
}

export const env = _env.data
