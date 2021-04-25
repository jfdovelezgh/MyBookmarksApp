import logo from './../../logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Grid, Paper } from '@material-ui/core';
import HeaderBar from './../HeaderBar/headerBar';

function App() {
  return (
    <Grid container direction="column" className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Grid item xs="12">
        <HeaderBar />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} md lg xl />
        <Grid item xs={12} sm={8} md lg xl />
          {/* <Content /> */}
        <Grid item xs={false} sm={2} md lg xl />
      </Grid>
    </Grid>
  );
}

export default App;
