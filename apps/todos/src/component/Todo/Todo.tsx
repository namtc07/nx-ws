import { Button, List, message, Popconfirm } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashCan,
  faPen,
  faXmark,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { edit, remove, todoState } from '../../store/todoSlice';
import React, { useState, useRef, useEffect, ReactElement } from 'react';
import { useAppDispatch } from '../../store/hooks';

interface TodoItemProps {
  item: todoState;
  editing: any;
}
export interface ItemProps {
  id: number;
  title: string;
}

const BtnDel = styled(Button)`
  border: none;
  :hover {
    color: red;
  }
`;
const BtnEdit = styled(Button)`
  border: none;
  :hover {
    color: Blue;
  }
`;
const IconsWrapper = styled.div`
  display: flex;
  column-gap: 8px;
`;
const TodoItem = styled(List.Item)`
  display: flex;
  padding: 0;
  padding-left: 10px;
  padding-top: 10px;
  .edit-item {
    outline: none;
    border: none;
    border-bottom: 1px solid #333;
  }
`;

const Todo = ({ id, title }: ItemProps): ReactElement => {
  const [editing, setEditing] = useState<TodoItemProps['editing']>(null);
  const [todoEdit, setTodoEdit] = useState(title);

  const dispatch = useAppDispatch();
  const inputText = useRef<HTMLInputElement>(null);
  useEffect(() => inputText?.current?.focus());

  const handleInput = (e: any) => {
    if (todoEdit !== title) {
      dispatch(edit({ id: editing, title: todoEdit }));
      setEditing(null);
      message.success('Edited');
    } else {
      setEditing(null);
    }
  };

  const confirm = () => {
    dispatch(remove(id));
    message.success('Click on Yes');
  };

  const cancel = () => {
    message.error('Click on No');
  };

  return (
    <TodoItem>
      {!editing ? (
        <>
          {title}
          <IconsWrapper>
            <BtnEdit
              onClick={() => {
                setEditing(id);
              }}
            >
              <FontAwesomeIcon icon={faPen} />
            </BtnEdit>
            <Popconfirm
              title="Are you sure to delete this task?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <BtnDel>
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
              </BtnDel>
            </Popconfirm>
          </IconsWrapper>
        </>
      ) : (
        <>
          <input
            className="edit-item"
            ref={inputText}
            defaultValue={title}
            onChange={(e) => setTodoEdit(e.target.value)}
          />

          <IconsWrapper>
            <BtnEdit onClick={handleInput}>
              <FontAwesomeIcon icon={faCheck} />
            </BtnEdit>
            <BtnDel
              onClick={() => {
                setEditing(null);
                setTodoEdit(title);
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </BtnDel>
          </IconsWrapper>
        </>
      )}
    </TodoItem>
  );
};

export default Todo;
