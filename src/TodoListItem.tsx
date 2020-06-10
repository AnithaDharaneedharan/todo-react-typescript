import React from "react";
import "./TodoListItem.css"

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      {/* <label style={{textDecoration: todo.complete ? "line-through" : "none"}}> Inline style replaced with external css */}
      <label className={todo.complete ? "complete" : undefined}> 
        <input type="checkbox" checked={todo.complete} onChange= {() => toggleTodo(todo)}/>
        {todo.text}
      </label>
    </li>
  );
};
