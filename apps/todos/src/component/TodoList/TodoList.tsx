import { ReactElement, useState } from 'react';
import { selectTodo } from '../../store/todoSlice';
import { useAppSelector } from '../../store/hooks';
import ListItem from '../Todo/Todo';
import { ItemProps } from '../Todo/Todo';
import styled from 'styled-components';

const TodoList = styled.div`
  height: 300px;
  margin-top: 20px;
  overflow: scroll;
`;

const ListTodo = (): ReactElement => {
  const todos = useAppSelector(selectTodo);

  return (
    <TodoList className="list">
      {todos.length > 0 ? (
        todos.map((item: ItemProps) => (
          <ListItem key={item.id} id={item.id} title={item.title} />
        ))
      ) : (
        <h1>not yet</h1>
      )}
    </TodoList>
  );
};
export default ListTodo;
