import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Coin from './Routes/Coin';
import Coins from './Routes/Coins';

interface IRouterProps {}

function Router({}: IRouterProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/:coinId'>
          <Coin />
        </Route>
        <Route path='/'>
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
