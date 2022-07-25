import { uuid } from '../utils'

export interface IProject {
  name: string // 项目名称
  description: string // 项目描述
  pages: IPage[] // 页面
}

export interface IPage {
  name: string // 页面名称
  description: string // 页面描述
  elements: IElement[] // 元素
}

export interface IElement {
  id: number // 元素id
  name: string // 元素名称
  mId: number // 物料id
  mVersion: string // 物料版本
}

export class Project implements IProject {
  public static create(p?: IProject) {
    const project = new Project()
    if (p) {
      project.name = p.name
      project.description = p.description
      p.pages.forEach(page => project.addPage(Page.create(page)))
    } else {
      project.addPage(Page.create())
    }
    
    return project
  }
  public name: string = 'New Porject'
  public description: string = 'New Porject Description'
  public pages: Page[] = []
  constructor() {}

  public addPage(page: Page) {
    this.pages.push(page)
  }

  public removePage(page: Page) {
    const index = this.pages.indexOf(page)
    if (index > -1) {
      this.pages.splice(index, 1)
    }
  }

  public insertPage(page: Page, index: number) {
    this.pages.splice(index, 0, page)
  }

  public getJson(): IProject {
    return {
      name: this.name,
      description: this.description,
      pages: this.pages.map(page => page.getJson())
    }
  }
}

export class Page implements IPage {
  public static create(p?: IPage) {
    const page = new Page()
    if(p) {
      page.name = p.name
      page.description = p.description
      p.elements.forEach(element => page.addElement(PageElement.create(element)))
    }
    return page
  }
  public name: string = 'New Page'
  public description: string = 'New Page Description'
  public elements: PageElement[] = []
  constructor() {}

  public addElement(element: PageElement) {
    this.elements.push(element)
  }

  public removeElement(element: PageElement) {
    const index = this.elements.indexOf(element)
    if (index > -1) {
      this.elements.splice(index, 1)
    }
  }

  public insertElement(element: PageElement, index: number) {
    this.elements.splice(index, 0, element)
  }

  public getJson(): IPage {
    return {
      name: this.name,
      description: this.description,
      elements: this.elements.map(element => element.getJson())
    }
  }
}

export class PageElement implements IElement {
  public static create(e?: IElement) {
    const element = new PageElement()
    if (e) {
      element.id = e.id
      element.name = e.name
      element.mId = e.mId
      element.mVersion = e.mVersion
    }
    return element
  }
  public id: number = Number(uuid())
  public name: string = 'New Element'
  public mId: number = 0
  public mVersion: string = ''
  constructor() {}

  public getJson() {
    return {
      id: this.id,
      name: this.name,
      mId: this.mId,
      mVersion: this.mVersion
    }
  }
}
