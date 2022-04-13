import { INIT_APP_THEME, SET_APP_THEME } from '~/constants';

const initialState = {};

export default function theme(state = initialState, action) {
  switch (action.type) {
    case INIT_APP_THEME:
    case SET_APP_THEME:
      return {
        ...state,
        mode: action.mode,
      };
    default:
      return state;
  }
}
