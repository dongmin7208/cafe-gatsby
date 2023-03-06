import styled from 'styled-components';
import Todo from './components/Todo';
// import Motion from './components/Motion';
// import Motion from './components/Motion';
import Motion from './components/Motion';
import Header from './components/Header';
import Board from './components/Board';
import DragabbleCard from './components/DragabbleCard';
import Coin from './routes/Coin';
import Coins from './routes/Coins';
import Chart from './routes/Chart';
import Ani from './components/AnimatePresence';
import Airbnb from './components/Airbnb';
import Slider from './components/Slider';
function App() {
  return (
    <>
      <Airbnb />
      <Motion />
      <Todo />
      <Ani />
      <Slider />
      {/* <Chart coinId={} /> */}
      {/* <Coin /> */}
      {/* <Coins /> */}
      {/* <Header /> */}
      {/* <DragabbleCard toDoId={0} toDoText={''} index={0} />
      <Board toDos={[]} boardId={''} /> */}

      {/* <Board toDos={[]} boardId={''} /> */}
    </>
  );
}

export default App;
