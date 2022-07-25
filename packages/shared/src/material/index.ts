export interface ICategory {
  name: string // 类目名称
}

export interface IMaterialData {
  version: string // 版本
  source: string // 物料源
}

export interface IMaterial extends IMaterialData {
  id: number // 物料id
  type: string // 类型
  name: string // 物料名称
  title: string // 物料标题
  thumbnail: string // 物料缩略图
  category: ICategory // 类目
  data: IMaterialData[] // 数据
}

export interface IMaterialLoader {
  type: string // 类型
  load(material: IMaterial): Promise<any> // 加载物料
}
