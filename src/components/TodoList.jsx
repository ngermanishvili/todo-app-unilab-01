import React, { useState, useEffect } from "react";
import Navbar from "./Header/Navbar";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoList = () => {
  // i used this useState for the local storage to save the todos.
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    // If there are todos in the local storage, we will parse them into an array and return them. If there are no todos, we will return an empty array.
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  //! This effect will run every time the todos array is updated.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //! This handdleAddTodo function will be passed to the TodoForm component as a prop.
  const handleAddTodo = (text) => {
    //? Here we check if the input is empty or not. If it is not empty, we create a new todo object and add it to the list of todos.
    if (text.trim() !== "") {
      const newTodo = { id: todos.length + 1, text: text, completed: false };
      setTodos([...todos, newTodo]);
    }
  };

  const removeTodo = (id) => {
    let updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <Navbar />
      <TodoContainer>
        <h1>Add Your Daily Tasks</h1>
        {/* Render the TodoForm component and pass the handleAddTodo function as a prop. */}
        <TodoForm handleAddTodo={handleAddTodo} />
        {/* Render each todo as a TodoItem component. */}
        {todos.map((todo) => (
          <TodoItem
            completeTodo={completeTodo}
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
          />
        ))}
      </TodoContainer>
    </>
  );
};

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #fff;
`;

export default TodoList;
