import { connect } from 'react-redux';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { setTheme } from '~/actions';

function Home({ theme, setTheme }) {
  return (
    <>
      <FormControlLabel
        control={
          <Switch
            checked={theme.mode === 'dark'}
            onChange={(event) => {
              setTheme(event.target.checked ? 'dark' : 'light');
            }}
          />
        }
        label="Dark theme"
      />
    </>
  );
}

Home.title = 'Bun venit';
Home.description = 'Bioderma este o alifie.';

export default connect(
  (state) => ({
    theme: state.theme,
  }),
  { setTheme },
)(Home);
