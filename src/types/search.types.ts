import { DataType } from "./common.types"

export interface SearchProps {
  setResponse(data: DataType, status: number): void
  resetDataState(): void
  showError(message: string): void
  toggleLoading(): void
}

export interface FormRadioButtonProps {
  value: string
  checked?: boolean
  handleOption(value: string): void
}

export type FormRadioProps = Pick<FormRadioButtonProps, "handleOption">

export interface FormInputProps {
  handleValue(value: string): void
  value: string
}

export interface FormButtonProps {
  loading: boolean
}