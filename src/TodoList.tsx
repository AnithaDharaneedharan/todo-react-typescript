import { TodoListItem } from "./TodoListItem";
import React from 'react';

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
}

export const TodoList:React.FC<TodoListProps> = ({todos, toggleTodo}) => {
        return(
            <ul>
                {todos.map(todo => <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo}/>)}
            </ul>
        )
}