import { vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { PersonajePage } from './personaje'

afterEach(() => {
  vi.restoreAllMocks()
  cleanup()
})

// Mock global.fetch to avoid hitting the real API
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        results: [
          {
            id: 1,
            name: 'Rick Sanchez',
            species: 'Human',
            image: 'rick.jpg'
          }
        ]
      })
  })
)

test('carga personajes desde la API', async () => {
  render(<PersonajePage />)

  expect(await screen.findByText('Rick Sanchez')).toBeInTheDocument()
})
