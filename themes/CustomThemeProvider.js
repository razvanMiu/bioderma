import { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import config from '@bioderma/registry';
import { initTheme } from '@bioderma/actions';
import { ThemeProvider } from '@mui/material/styles';

import light from './light';
import dark from './dark';

const themes = {
  light,
  dark,
};

export function getTheme(id) {
  return themes[id] || themes[config.defaultTheme];
}

function CustomThemeProvider({ registry, initTheme, children }) {
  useEffect(() => {
    initTheme();
    /* eslint-disable-next-line */
  }, []);

  const theme = useMemo(() => {
    return getTheme(registry.appTheme || config.defaultTheme);
  }, [registry]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default connect(
  (state) => ({
    registry: state.registry,
  }),
  { initTheme },
)(CustomThemeProvider);
