import React from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';

import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import EventsExample from './components/EventsExample';
import Card, {CardVariant} from './components/Card';

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink 
            to='/users'
            style={{marginRight: 15}}
          >
            users
          </NavLink >
          <NavLink 
            to='/todos'
            style={{marginRight: 15}}
          >
            todos
          </NavLink>
          <NavLink 
            to='/evex'
            style={{marginRight: 15}}
          >
            events examples
          </NavLink>
          <NavLink 
            to='/card'
            style={{marginRight: 15}}
          >
            card
          </NavLink>
          
        </div>
        <Route path={'/users'} exact>
          <UsersPage/>
        </Route>
        <Route path={'/todos'} exact>
          <TodosPage/>
        </Route>
        <Route path={'/users/:id'}>
          <UserItemPage/>
        </Route>
        <Route path={'/evex'} exact>
          <EventsExample/>
        </Route>
        <Route path={'/card'} exact>
        <Card 
          variant={CardVariant.primary}
          width='250px'
          height='250px'
        />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;