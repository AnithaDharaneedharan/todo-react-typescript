import React, {useState} from 'react';
import { ChangeEvent, FormEvent } from 'react';

interface AddTodoFormProps {
    addTodo: AddTodo;
}

export const AddTodoForm : React.FC<AddTodoFormProps>= ({addTodo}) => {

    const [newTodo, setNewTodo] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => { 
        setNewTodo(event.target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        addTodo(newTodo);
    }

    return (
        <form>
            <input type= "text" onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>Add Todo</button>
        </form>

    )
}


