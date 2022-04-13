import { INIT_APP_THEME, SET_APP_THEME } from '@bioderma/constants';

const initialState = {};

export default function registry(state = initialState, action) {
  switch (action.type) {
    case INIT_APP_THEME:
    case SET_APP_THEME:
      return {
        ...state,
        appTheme: action.id,
      };
    default:
      return state;
  }
}
