import { DataType, IDataItem } from "./common.types"

export interface ResultsProps {
  loading: boolean
}

export interface ResultsListProps {
  items: DataType
}

export interface ResultsItemProps {
  item: IDataItem
  chooseItem(item: IDataItem): void
}