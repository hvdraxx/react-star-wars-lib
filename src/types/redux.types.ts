import { DataType, IDataItem } from "./common.types"

// State //
export interface IDataState {
  response: DataType,
  status: number
  choosedItem: IDataItem
}

export interface IAppState {
  isLoading: boolean,
  responseError: {
    show: boolean,
    message: string
  }
}



// map State //
export interface ImapDataStateToProps {
  data: {
    response: IDataItem
    status: number
    choosedItem: IDataItem
  }
}

export interface ImapAppStateToProps {
  app: {
    isLoading: boolean
    responseError: {
      show: boolean
      message: string
    }
  }
}



// Data Actions
interface IsetResponseType {
  type: string
  payload: DataType
  status: number
}

interface IresetState {
  type: string
  payload: IDataItem
}

interface IremoveChoosedItem {
  type: string
  payload: {
    response: []
    status: number
    choosedItem: IDataItem
  }
}

export type DataActions = IsetResponseType | IresetState | IremoveChoosedItem



// App Actions
interface ItoggleActions {
  type: string
}

interface IshowError {
  type: string
  payload: string
}

interface IhideError {
  type: string
}

export type AppActions = ItoggleActions | IshowError | IhideError