import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import IndexPage from '.'

describe('Index page', () => {
  test('App mounts properly', () => {
    const wrapper = render(<IndexPage />)
    expect(wrapper).toBeTruthy()
  })
})