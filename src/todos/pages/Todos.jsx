import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { ImCheckboxChecked } from "react-icons/im";
import { AiFillEdit } from "react-icons/ai";

export const Todos = ({ logout }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.auth.todos);
  const edit = useSelector((state) => state.auth.edit);

  console.log(edit);

  const [title, setTitle] = useState("");
  const [editTodo, setEditTodo] = useState("");

  const addTodos = () => {
    if (title.trim()) {
      const data = {
        title,
        id: new Date(),
        completed: false,
        edit: false,
      };
      dispatch({ type: "ADD", payload: data });
    }
    setTitle("");
  };
  const deleteTodos = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  const deleteAll = () => {
    dispatch({ type: "DELETEALL" });
  };
  const editTodos = (el) => {
    dispatch({ type: "EDIT", payload: el });
    setEditTodo(el.title);
  };
  const completedTodos = (id) => {
    dispatch({ type: "COMPLETED", payload: id });
  };
  const saveHandler = (el) => {
    dispatch({ type: "SAVE", payload: { id: el.id, title: editTodo } });
  };
  return (
    <Container>
      <BtnLogOut onClick={logout}>Log Out</BtnLogOut>
      <DivBlock1>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <button onClick={deleteAll}>DELETE ALL</button>
        <button onClick={addTodos}>ADD</button>
      </DivBlock1>
      {todos.map((el) => (
        <DivMap key={el.id}>
          {el.edit ? (
            <DivEdit>
              <input
                type="text"
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
              />
              <button onClick={() => saveHandler(el)}>Save</button>
            </DivEdit>
          ) : (
            <h1
              style={
                el.completed
                  ? { textDecoration: "line-through", color: "#0000007a" }
                  : null
              }
            >
              {el.title}
            </h1>
          )}
          <div>
            <ImCheckboxChecked onClick={() => completedTodos(el.id)} />
            <AiFillDelete onClick={() => deleteTodos(el.id)} />
            <AiFillEdit onClick={() => editTodos(el)} />
          </div>
        </DivMap>
      ))}
    </Container>
  );
};
const Container = styled.div`
  width: 800px;
  background-color: #118908;
  text-align: center;
  margin: 20px 0;
  border-radius: 12px;
  padding-bottom: 30px;
`;
const BtnLogOut = styled.button`
  margin-top: 20px;
  width: 100px;
  height: 30px;
  border-radius: 22px;
  border: 0;
`;
const DivMap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin: 10px;
  h1 {
    width: 600px;
  }
  div {
    display: flex;
    gap: 20px;
  }
`;
const DivBlock1 = styled.header`
  input {
    margin: 10px;
    width: 400px;
    height: 40px;
    border-radius: 22px;
    border: 0;
    text-align: center;
  }
  button {
    width: 150px;
    height: 30px;
    margin: 10px;
    border-radius: 12px;
    border: 0;
    font-size: 16px;
  }
`;
const DivEdit = styled.main`
  width: 600px;
  margin-top: 8px;
  input {
    width: 300px;
    height: 40px;
    border-radius: 22px;
    border: 0;
  }
`;
