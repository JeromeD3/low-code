export interface IMaterial extends IMaterialData {
  id: number
  type: string // 类型
  category: ICategory // 类目
  data: IMaterialData[] // 数据
}

export interface ICategory {
  name: string // 类目名称
}

export interface IMaterialData {
  version: string // 版本
  source: string // 物料源
}

export interface IMaterialLoader {
  type: string // 类型
  load(material: IMaterial): Promise<any> // 加载物料
}
