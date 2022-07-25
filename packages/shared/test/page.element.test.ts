import { describe, expect, test } from 'vitest'
import { Project } from '../src'

describe('project', () => {
  const project = Project.create()

  test('project.name', () => {
    expect(project.name).toBe('New Porject')
  })

  test('project.page.length === 1', () => {
    expect(project.pages.length).toBe(1)
  })

  test('project.json', () => {
    expect(project.getJson()).toMatchInlineSnapshot(`
      {
        "description": "New Porject Description",
        "name": "New Porject",
        "pages": [
          {
            "description": "New Page Description",
            "elements": [],
            "name": "New Page",
          },
        ],
      }
    `)
  })
})
