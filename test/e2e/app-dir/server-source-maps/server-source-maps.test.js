import { nextTestSetup } from 'e2e-utils'

describe('app-dir - server source maps', () => {
  const { next, isTurbopack, skipped } = nextTestSetup({
    files: __dirname,
  })

  if (skipped) return

  it('logged errors have a sourcemapped stack with a codeframe', async () => {})

  it('logged errors have a sourcemapped `cause`', async () => {})
})
