import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodo, setIncompleteTodo] = useState([]);
  const [completeTodo, setCompleteTodo] = useState([]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodo, todoText];
    setIncompleteTodo(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodo];
    newTodos.splice(index, 1); //0番目(index)の要素から, 1つ削除して配列を再生成する
    setIncompleteTodo(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodo = [...incompleteTodo];
    newIncompleteTodo.splice(index, 1); //0番目(index)の要素から, 1つ削除して配列を再生成する

    const newCompleteTodo = [...completeTodo, incompleteTodo[index]]; //completeTodoにincompleteTodoのindex番目の要素を追加する
    setIncompleteTodo(newIncompleteTodo);
    setCompleteTodo(newCompleteTodo);
  };

  const onClickReturn = (index) => {
    const newCompleteTodos = [...completeTodo];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodo = [...incompleteTodo, completeTodo[index]]; //incompleteTodoにcompleteTodoのindex番目の要素を追加する
    setCompleteTodo(newCompleteTodos);
    setIncompleteTodo(newIncompleteTodo);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodo.length >= 5}
      />
      {incompleteTodo.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるToDoは５個までだ！タスクを消化しろ！
        </p>
      )}
      <IncompleteTodos
        incompleteTodo={incompleteTodo}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />
      <CompleteTodos completeTodo={completeTodo} onClick={onClickReturn} />
    </>
  );
};
