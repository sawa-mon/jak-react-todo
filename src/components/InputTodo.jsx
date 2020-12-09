import React from "react";

export const InputTodo = (porps) => {
  const { todoText, onChange, onClick, disabled } = porps;
  return (
    <div>
      <input
        disabled={disabled}
        onChange={onChange}
        value={todoText}
        placeholder="TODOを入力"
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
