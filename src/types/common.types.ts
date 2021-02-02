export interface IDataItem {
  [key: string]: string | string[]
}

export type DataType = Array<IDataItem>

export interface ResponseType {
  data: DataType
  status: number
}