import React from 'react'
import { TodoCounter } from './TodoCounter'
import { CreateTodoButton } from './CreateTodoButton'
import { TodoItem } from './TodoItem'
import { TodoList } from './TodoList'
import { TodoSearch } from './TodoSearch'
//import './App.css';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar curso de Intro a React', completed: false},
  {text: 'Llorar con la llorona', completed: false},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')
  
  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  let serchedTodos = []

  if (!searchValue.length >= 1) {
    serchedTodos = todos
  } else {
    serchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

const completeTodo = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text === text)
  const newTodos = [...todos]
  newTodos[todoIndex].completed = true
  setTodos(newTodos)
}

const deleteTodo = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text === text)
  const newTodos = [...todos]
  newTodos.splice(todoIndex, 1)
  setTodos(newTodos)
}


  return (
    <React.Fragment> 
 
      <TodoCounter
        total={totalTodos}
        completedTodos={completedTodos}
      />
      
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      
      <TodoList>
        {serchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}  
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
      
    </React.Fragment>
  );
}

//React solo puede renderizar un contenedor, para evitar enapsular en un div podemos usar 
//Ract.Fragment o <>

export default App;
