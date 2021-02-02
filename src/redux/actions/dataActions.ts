import { DataType, IDataItem } from '../../types/common.types';
import { DataActions } from '../../types/redux.types';
import { SET_RESPONSE, CHOOSE_ITEM, RESET_STATE } from '../types';

export const setResponse = (response: DataType, status: number): DataActions => {
  return {
    type: SET_RESPONSE,
    payload: response,
    status: status
  }
}

export const chooseItem = (item: IDataItem): DataActions => {
  return {
    type: CHOOSE_ITEM,
    payload: item
  }
}

export const resetDataState = (): DataActions => {
  return {
    type: RESET_STATE,
    payload: {
      response: [],
      status: 0,
      choosedItem: {}
    }
  }
}