import React, { useState, useCallback, useMemo } from "react";
import Todo from "../../components/layouts/todo/Todo";

const BaseTodos = () => {
  console.log('App');

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([
    {
        todo: 'Learn vue.js',
        isCompleted: false
    },
    {
        todo: 'Learn React',
        isCompleted: false
    },
    {
        todo: 'Learn Laravel',
        isCompleted: false
    },
  ]);

  const inputTodo = (e) => {
    setTodo( e.target.value )
  }

  const addTodo = (e) => {
    e.preventDefault()
    setTodos(todos => [...todos,{todo:todo, isCompleted:false}])
    setTodo('')
  }

  const completeTodo = useCallback(index => {
    console.log(index)
    let newTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    })
    setTodos(newTodos);
  }, [todos]);
  
  const notCompleteTodos = useMemo(() => todos.filter(todo => {
    console.log('notComplete')
    return todo.isCompleted === false;
  }), [todos]);

  return (
    <div style={{ margin: "2em"}}>
      <form onSubmit={ addTodo }>
        <input type="text" onChange={inputTodo} value={todo} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </form>
      <Todo todos={notCompleteTodos} completeTodo={completeTodo} />
    </div>
  );
};

export default BaseTodos;