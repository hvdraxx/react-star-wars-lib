import { AppActions } from '../../types/redux.types';
import { TOGGLE_LOADING, TOGGLE_BUTTON, SHOW_ERROR, HIDE_ERROR } from './../types';

export const toggleLoading = (): AppActions => {
  return {type: TOGGLE_LOADING}
}

export const toggleButton = (): AppActions => {
  return {type: TOGGLE_BUTTON}
}

export const showError = (message: string): AppActions => {
  return {
    type: SHOW_ERROR,
    payload: message
  }
}

export const hideError = (): AppActions => {
  return {type: HIDE_ERROR}
}

