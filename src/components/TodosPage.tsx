import React, {FC, useState, useEffect} from 'react';
import axios from 'axios';
import List from './List';
import TodoItem from './TodoItem';
import { ITodo } from '../types/types';

const TotosPage:FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchTodos();
    }, []);



    async function fetchTodos() {
        try {
        const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
        setTodos(response.data)
        } catch (e) {
        console.log(e)
        }
    }

    return (
        <List
            items={todos}
            renderItem={(todo:ITodo) => 
                < TodoItem
                    todo={todo}
                    key={todo.id}
                />
            }
        />
    )
}

export default TotosPage;