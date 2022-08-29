import React, { useState, memo } from "react";

function TodoList({todo,completeTodo,index}) {
  console.log('TodoList')
  return (
    <li
      style={todo.isCompleted === true ? { textDecorationLine: 'line-through' } : {}}
    >
      {todo.todo}
      <button onClick={() => completeTodo(index)} className="ml-2 py-2 px-3 text-xs font-medium text-center text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">完了</button>
    </li>
  )
}

export default memo(TodoList);