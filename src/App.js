import styled from 'styled-components';

const Father = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #282c34;
  color: white;
`;
const BoxWrapper = styled.div`
  display: flex;
`;
const BoxOne = styled.div`
  width: 100px;
  height: 100px;
  background-color: #282c34;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: #61dafb;
    color: #282c34;
  }
`;
const BoxTwo = styled.div`
  width: 100px;
  height: 100px;
  background-color: #282c34;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: #61dafb;
    color: #282c34;
  }
`;
const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

function App() {
  return (
    <Father>
      <Text>Styled Components</Text>
      <BoxWrapper>
        <BoxOne>Box 1</BoxOne>
        <BoxTwo>Box 2</BoxTwo>
      </BoxWrapper>
    </Father>
  );
}

export default App;
