// Data type from SWAPI
export type Data = {
  [key: string]: string | string[]
}
// = = = = = = = = = = = = = = = = = = = = = = = = //



// = = = = = = = = = = = = = = = = = = = = = = = = //
// types for Search Section
export type SearchProps = {
  setResponse(data: Array<Data>): void
  setResponseStatus(status: string | number): void
  setSelectedItem(clear: {}): void 
  triggerModal(): void
  triggerResults(showOrNot: boolean): void
  triggerItem(showOrNot: boolean): void
}

export type FormRadioProps = {
  value: string
  checked?: boolean
  handleOption(value: string): void
}

export type HandleOptionProps = Pick<FormRadioProps, "handleOption">

export type FormInputProps = {
  handleValue(value: string): void
  value: string
}
// = = = = = = = = = = = = = = = = = = = = = = = = //



// = = = = = = = = = = = = = = = = = = = = = = = = //
// types for Results Section
export type ResultsSectionProps = {
  items: Array<Data>
  transition: boolean
  selectItem(item: Data): void
  triggerItem(showOrNot: boolean): void
}

export type ResultsListProps = Omit<ResultsSectionProps, "transition">

export type ResultsItemProps = {
  item: Data
  selectItem(item: Data): void
  triggerItem(showOrNot: boolean): void
}
// = = = = = = = = = = = = = = = = = = = = = = = = //



// = = = = = = = = = = = = = = = = = = = = = = = = //
// types for Data Section
export type DataSectionProps = {
  transition: boolean
  item: Data
}

export type DataListProps = Omit<DataSectionProps, "transition">

export type DataItemProps = {
  [key: string]: string | string[]
}
// = = = = = = = = = = = = = = = = = = = = = = = = //



// = = = = = = = = = = = = = = = = = = = = = = = = //
// types for Modal
export type ModalProps = {
  status: number | string
  triggerModal(): void
}

export type ModalTextProps = Omit<ModalProps, "triggerModal">
// = = = = = = = = = = = = = = = = = = = = = = = = //