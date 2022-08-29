import React, { useState, memo } from "react";
import TodoList from "./TodoList";

const Todo = ({todos,completeTodo}) => {
  console.log('Todo')
  return (<>
    <h2>Todo</h2>
    <ul>
      {todos.map((todo,index) => 
        <TodoList 
          todo={todo} 
          completeTodo={completeTodo}
          index={index} 
          key={index} 
        /> 
      )}
    </ul>
  </>);
};

export default memo(Todo);