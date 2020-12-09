import React from "react";

export const InputTodo = (porps) => {
  const { todoText, onChange, onClick } = porps;
  return (
    <div>
      <input onChange={onChange} value={todoText} placeholder="TODOを入力" />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
