import { IDataState } from '../../types/redux.types';
import { SET_RESPONSE, CHOOSE_ITEM, RESET_STATE } from '../types';

const initialState: IDataState = {
  response: [],
  status: 0,
  choosedItem: {}
}

export const dataReducer = (state = initialState, action: any): IDataState => {
  switch(action.type) {
    case SET_RESPONSE:
      return { 
        ...state,
        response: action.payload,
        status: action.status
      }
    case CHOOSE_ITEM:
      return {
        ...state,
        choosedItem: action.payload
      }
    case RESET_STATE: {
      return {
        ...state,
        response: action.payload.response,
        status: action.payload.status,
        choosedItem: action.payload.choosedItem
      }
    }
    default: return state
  }
}