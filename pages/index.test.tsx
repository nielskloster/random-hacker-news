import { describe, test, expect, afterAll, afterEach, beforeAll } from 'vitest'
import { render, waitForElementToBeRemoved, screen } from '@testing-library/react'
import IndexPage from '.'
import { setupServer } from 'msw/node'
import { rest } from 'msw'

export const restHandlers = [
  rest.get('https://hacker-news.firebaseio.com/v0/topstories.json', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([]))
  }),
]

const server = setupServer(...restHandlers)

describe('Index page', () => {
  beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }))
  afterAll(() => server.close())
  afterEach(() => server.resetHandlers())

  test('App mounts properly', async () => {
    const wrapper = render(<IndexPage />)
    await waitForElementToBeRemoved(() => screen.queryByLabelText('loading'))

    expect(wrapper).toMatchSnapshot()
  })
})