import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Routes/Home';
import Search from './Routes/Search';
import Tv from './Routes/Tv';
import { createGlobalStyle } from 'styled-components';

// const GlobalStyle = createGlobalStyle`

//   body {
//     background-color: ${(props) => props.theme.bgColor};
//     color: white;
//     font-family: 'Open Sans', sans-serif;
//   }
// `;

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/tv'>
          <Tv />
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
        <Route path={['/', '/movies/:movieId']}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
