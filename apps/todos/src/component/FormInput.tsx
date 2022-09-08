import { add } from '../store/todoSlice';
import { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import styled from 'styled-components';
import { Input, Button, Form } from 'antd';

interface Props {
  todo: any;
}

const FormStyle = styled(Form)`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const FormInput = () => {
  const dispatch = useAppDispatch();
  const [todo, setTodo] = useState<Props['todo']>('');
  const [disable, setDisable] = useState<boolean>(true);

  const handleSubmit = () => {
    if (todo.length === 0) return;
    dispatch(add(todo));
    setTodo(null);
    setDisable(true);
  };

  return (
    <FormStyle onFinish={handleSubmit}>
      <Input
        value={todo}
        onChange={(e) => {
          if (e.target.value.length > 0) setDisable(false);
          return setTodo(e.target.value);
        }}
        placeholder="Type something"
        style={{ marginRight: '4px' }}
      />
      <Button onClick={handleSubmit} type="primary" disabled={disable}>
        ADD
      </Button>
    </FormStyle>
  );
};
export default FormInput;
