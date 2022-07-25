import { describe, expect, test } from 'vitest'
import { PageElement } from '../src'

describe('page.element', () => {
  test('PageElement.create', () => {
    const element = PageElement.create()
    expect(element.name).toBe('New Element')
  })
})