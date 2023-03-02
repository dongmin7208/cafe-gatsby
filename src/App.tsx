import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  // flex-direction: column;
  flex-wrap: wrap;
`;

const BiggerBox = styled.div`
  width: 50%;
  height: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { rotateZ: 90 },
  click: { borderRadius: '100px' },
};
const framerHover = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  const rotateZ = useTransform(y, [-800, 800], [-360, 360]);
  useEffect(() => {
    scale.onChange(() => console.log(scale.get()));
  }, [scale]);

  return (
    <Wrapper>
      <button onClick={() => x.set(x.get() + 100)}>right</button>
      <button onClick={() => x.set(x.get() - 100)}>left</button>
      <button onClick={() => y.set(y.get() - 100)}>up</button>
      <button onClick={() => y.set(y.get() + 100)}>down</button>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          style={{ x, y, scale: scale }}
          drag='x'
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={biggerBoxRef}
          variants={boxVariants}
          whileHover='hover'
          whileTap='click'
        />
        <Box
          style={{ x, y, scale: scale }}
          drag='x'
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={biggerBoxRef}
          variants={boxVariants}
          whileHover='hover'
          whileTap='click'
        ></Box>
        <Box
          style={{ x, y, scale: scale }}
          drag='x'
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={biggerBoxRef}
          variants={boxVariants}
          whileHover='hover'
          whileTap='click'
        ></Box>
        <Box
          style={{ x, y, scale: scale }}
          drag='x'
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={biggerBoxRef}
          variants={boxVariants}
          whileHover='hover'
          whileTap='click'
        ></Box>
      </BiggerBox>
      {/* <BiggerBox ref={biggerBoxRef}>
        <BiggerBox ref={biggerBoxRef}></BiggerBox>
        <BiggerBox ref={biggerBoxRef}></BiggerBox>
      </BiggerBox> */}
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
