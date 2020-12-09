import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodo, onClick } = props;
  return (
    <div>
      <p>完了のTodo</p>
      <ul>
        {completeTodo.map((todo, index) => {
          return (
            <div key={todo}>
              <li>{todo}</li>
              <button onClick={() => onClick(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
