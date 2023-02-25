import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/react'
import IndexPage from '.'

describe('Index page', () => {
  test('App mounts properly', async () => {
    const wrapper = render(<IndexPage />)

    expect(wrapper).toMatchSnapshot()
  })
})