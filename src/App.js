import React from 'react';
import './App.css';
// import ReactDOM from 'react-dom';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
function App(){
    return (
        <div className="todo-app">
         <TodoList/>
        </div>

    );
}
export default App;

