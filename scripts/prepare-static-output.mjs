import { cp, mkdir, rm } from 'node:fs/promises'

await rm('dist', { recursive: true, force: true })
await mkdir('dist', { recursive: true })
await cp('.next-build', 'dist', { recursive: true })

console.log('Static export copied from .next-build/ to dist/')
