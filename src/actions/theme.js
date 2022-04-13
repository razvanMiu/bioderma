import config from '@app/registry';
import { INIT_APP_THEME, SET_APP_THEME } from '~/constants';

const appTheme = config.localStorage.keys.theme.mode;

export function initTheme() {
  const theme = localStorage.getItem(appTheme);
  return {
    type: INIT_APP_THEME,
    mode: theme,
  };
}

export function setTheme(mode) {
  const theme = localStorage.getItem(appTheme);
  if (theme !== mode) {
    localStorage.setItem(appTheme, mode);
  }
  return {
    type: SET_APP_THEME,
    mode,
  };
}
