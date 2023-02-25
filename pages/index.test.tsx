import { describe, test, expect, afterEach, vi, Mock } from 'vitest'
import { render } from '@testing-library/react'
import IndexPage from '.'
import { useStories } from '../utils/useStories'

vi.mock('../utils/useStories')

describe('Index page', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  test('Renders loaded stories', async () => {
    (useStories as Mock).mockReturnValue({
      status: 'success',
      data: [{ "by": "ciguy", "descendants": 293, "id": 34913596, "kids": [34915602, 34914813, 34918513, 34916148], "score": 682, "text": "If it could happen to me, it can happen to anyone.", "time": 1677173389, "title": "Tell HN: Do not store any funds in PayPal or use them for anything critical", "type": "story" }]
    })
    const { container } = render(<IndexPage />)

    expect(container).toMatchSnapshot()
  })

  test('Renders failed request', async () => {
    (useStories as Mock).mockReturnValue({
      status: 'failed',
      error: 'Request failed'
    })
    const { container } = render(<IndexPage />)

    expect(container).toMatchSnapshot()
  })

  test('Renders loading', async () => {
    (useStories as Mock).mockReturnValue({
      status: 'loading',
    })
    const { container } = render(<IndexPage />)

    expect(container).toMatchSnapshot()
  })
})