import styled from 'styled-components';
import Filters from './component/Filters/Filters';
import FormInput from './component/FormInput';
import ListTodo from './component/TodoList/TodoList';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 450px;
  width: 100%;
  margin: auto;
  box-shadow: 0px 0px 27px #dadada;
  margin-top: 50px;
  padding: 20px;
`;

export function App() {
  return (
    <StyledApp>
      <div>
        <h1>Todo App</h1>
        <Filters />
      </div>
      <ListTodo />
      <FormInput />
    </StyledApp>
  );
}

export default App;
