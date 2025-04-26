import React from 'react'
import Todo from './Todo'

export default function TodoList({todolist}) {
  return (
   <>
   {
    todolist.map(todo => <Todo key = {todo.Id} todo = {todo}></Todo>)
   }
   </>
  );
}
