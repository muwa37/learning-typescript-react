import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, {CardVariant} from './components/Card';
import EventsExample from './components/EventsExample';
import List from './components/List';
import TodoItem from './components/TodoItem';
import UserItem from './components/UserItem';
import UserList from './components/UserList';
import { ITodo, IUser } from './types/types';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTodos(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="App">
      <Card 
        variant={CardVariant.primary}
        width='250px'
        height='250px'
      >
        <button>
          btn
        </button>
      </Card>

      <EventsExample/>

      <List
        items={users}
        renderItem={(user:IUser) => 
          < UserItem
            user={user}
            key={user.id}
          />
        }
      />

      <List
        items={todos}
        renderItem={(todo:ITodo) => 
          < TodoItem
            todo={todo}
            key={todo.id}
          />
        }
      />
    </div>
  );
}

export default App;