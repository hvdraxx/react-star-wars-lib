import { IAppState } from '../../types/redux.types';
import { HIDE_ERROR, SHOW_ERROR, TOGGLE_LOADING } from '../types';

const initialState: IAppState = {
  isLoading: false,
  responseError: {
    show: false,
    message: ''
  }
}

export const appReducer = (state = initialState, action: any): IAppState => {
  switch(action.type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      }
    case SHOW_ERROR:
      return {
        ...state,
        responseError: {
          show: true,
          message: action.payload
        }
      }
    case HIDE_ERROR:
      return {
        ...state,
        responseError: {
          show: false,
          message: state.responseError.message
        }
      }
    default: return state
  }
}