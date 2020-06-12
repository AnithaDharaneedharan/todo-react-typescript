import React, {useState} from "react";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";

const initialTodos: Array<Todo> = [
  { text: "walk the dog", complete: true },
  { text: "write the app", complete: false },
];
const App: React.FC = () => {
  const [todos, setTodods] = useState(initialTodos);

  const toggleTodo = (selectedTodo:Todo ) => {
    const newTodos = todos.map(todo => {
      if(todo === selectedTodo) {
       return { ...todo, complete: !todo.complete}
      }
      return todo;
    })
    setTodods(newTodos);
  }

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" && setTodods([...todos, {text: newTodo, complete: false}])
  }

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <AddTodoForm addTodo= {addTodo}/>
    </React.Fragment>
  );
};

export default App;
