import { INIT_APP_THEME, SET_APP_THEME } from '@bioderma/constants';

export function initTheme() {
  const theme = localStorage.getItem('appTheme');
  return {
    type: INIT_APP_THEME,
    id: theme,
  };
}

export function setTheme(id) {
  const theme = localStorage.getItem('appTheme');
  if (theme !== id) {
    localStorage.setItem('appTheme', id);
  }
  return {
    type: SET_APP_THEME,
    id,
  };
}
