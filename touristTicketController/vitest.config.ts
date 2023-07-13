import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        environment:'happy-dom',
        include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
        exclude: [
          '**/node_modules/**',
          '**/dist/**',
          './playground/**/*.*',
          './playground-temp/**/*.*',
        ],
        testTimeout: 20000
      },
})