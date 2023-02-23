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
const Box = styled.div`
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
    background-color: ${(props) => props.bgColor};
    color: #282c34;
  }
`;
const Circle = styled(Box)`
  border-radius: 50%;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
const Btn = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;
const Link = styled.a`
  color: white;
`;
const Input = styled.input.attrs((props) => ({
  type: 'text',
  placeholder: 'Enter your name',
  size: props.size || '1em',
  required: true,
  minlenght: 10,
}))`
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  color: white;
  font-size: 20px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
function App() {
  return (
    <Father as='header'>
      <Text>Styled Components</Text>
      <BoxWrapper>
        <Btn as='a' href='/'>
          Login
        </Btn>
        <Box bgColor='red'>Box 1</Box>
        <Circle bgColor='blue'>Circle 1</Circle>
        <Input type='text' placeholder='Enter your name' />
      </BoxWrapper>
    </Father>
  );
}

export default App;
