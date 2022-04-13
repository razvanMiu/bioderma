import { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import config from '@app/registry';
import { initTheme } from '~/actions';

import light from './light';
import dark from './dark';

const themes = {
  light,
  dark,
};

export function getTheme(mode) {
  return themes[mode] || themes[config.defaultTheme];
}

function CustomThemeProvider({ theme, initTheme, children }) {
  useEffect(() => {
    initTheme();
    /* eslint-disable-next-line */
  }, []);

  const currentTheme = useMemo(() => {
    return getTheme(theme.mode || config.defaultTheme);
  }, [theme]);

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
}

export default connect(
  (state) => ({
    theme: state.theme,
  }),
  { initTheme },
)(CustomThemeProvider);
