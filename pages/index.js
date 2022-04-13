import { connect } from 'react-redux';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { setTheme } from '@bioderma/actions';

function Home({ registry, setTheme }) {
  return (
    <>
      <FormControlLabel
        control={
          <Switch
            checked={registry.appTheme === 'dark'}
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
    registry: state.registry,
  }),
  { setTheme },
)(Home);
