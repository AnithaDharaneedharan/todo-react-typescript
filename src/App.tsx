import React, {useState} from "react";
import { TodoListItem } from "./TodoListItem";

const initialTodos: Array<Todo> = [
  { text: "walk the dog", complete: true },
  { text: "write the app", complete: false },
];
const App: React.FC = () => {
  const [todos, setTodods] = useState(initialTodos);

  function toggleTodo (selectedTodo:Todo ) {
    console.log("entered")
    const newTodos = todos.map(todo => {
      if(todo === selectedTodo) {
        console.log({...todo})
       return { ...todo, complete: !todo.complete}
      }
      return todo;
    })
    setTodods(newTodos);
  }

  return (
    <React.Fragment>
      <TodoListItem todo={todos[0]} toggleTodo={toggleTodo}/>
      <TodoListItem todo={todos[1]} toggleTodo={toggleTodo}/>
    </React.Fragment>
  );
};

export default App;
