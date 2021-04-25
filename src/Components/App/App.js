import './App.css';
import { Grid } from '@material-ui/core';
import HeaderBar from './../HeaderBar/headerBar';
import Content from './../Content/content';

function App() {
  return (
    <Grid container direction="column" className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Grid item xs="12">
        <HeaderBar />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content /> 
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
