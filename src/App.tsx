import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const circleVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial='start' animate='end'>
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </Wrapper>
  );
}

export default App;

// import { DragDropContext, DropResult } from 'react-beautiful-dnd';
// import { useRecoilState } from 'recoil';
// import styled from 'styled-components';
// import { toDoState } from './atoms';
// import Board from './components/Board';

// const Wrapper = styled.div`
//   display: flex;
//   width: 100vw;
//   margin: 0 auto;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const Boards = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   width: 100%;
//   gap: 10px;
// `;

// function App() {
//   const [toDos, setToDos] = useRecoilState(toDoState);
//   const onDragEnd = (info: DropResult) => {
//     const { destination, source } = info;
//     if (!destination) return;
//     if (destination?.droppableId === source.droppableId) {
//       // same board movement.
//       setToDos((allBoards) => {
//         const boardCopy = [...allBoards[source.droppableId]];
//         const taskObj = boardCopy[source.index];
//         boardCopy.splice(source.index, 1);
//         boardCopy.splice(destination?.index, 0, taskObj);
//         return {
//           ...allBoards,
//           [source.droppableId]: boardCopy,
//         };
//       });
//     }
//     if (destination.droppableId !== source.droppableId) {
//       // cross board movement
//       setToDos((allBoards) => {
//         const sourceBoard = [...allBoards[source.droppableId]];
//         const taskObj = sourceBoard[source.index];
//         const destinationBoard = [...allBoards[destination.droppableId]];
//         sourceBoard.splice(source.index, 1);
//         destinationBoard.splice(destination?.index, 0, taskObj);
//         return {
//           ...allBoards,
//           [source.droppableId]: sourceBoard,
//           [destination.droppableId]: destinationBoard,
//         };
//       });
//     }
//   };
//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <Wrapper>
//         <Boards>
//           {Object.keys(toDos).map((boardId) => (
//             <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
//           ))}
//         </Boards>
//       </Wrapper>
//     </DragDropContext>
//   );
// }

// export default App;
