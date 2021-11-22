import React from 'react'
import { AppUI } from './AppUI'
import { TodoProvider } from '../TodoContext'


//import './App.css';

//const defaultTodos = [
//  {text: 'Cortar cebolla', completed: false},
//  {text: 'Tomar curso de Intro a React', completed: false},
//  {text: 'Llorar con la llorona', completed: false},
//]

//Cutom ReactHook


function App() {
  
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}


export default App;
