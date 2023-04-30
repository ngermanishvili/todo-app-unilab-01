import {
  StyledForm,
  StyledInput,
  StyledButton,
  StyledTodoList,
  StyledTodoRow,
} from "./StyledComponents/TodoForm/TodoForm";
import React, { useState } from "react";

const TodoForm = ({ handleAddTodo }) => {
  const [input, setInput] = useState("");

  // This function is called when the user submits the form.
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo(input);
    setInput("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add item"
      />
      <StyledButton type="submit" className="important-btn">
        Add
      </StyledButton>
    </StyledForm>
  );
};

const TodoList = ({ todos, handleToggleTodo }) => {
  return (
    <StyledTodoList>
      {todos.map((todo) => (
        <StyledTodoRow key={todo.id}>
          <TodoItem todo={todo} handleToggleTodo={handleToggleTodo} />
        </StyledTodoRow>
      ))}
    </StyledTodoList>
  );
};

export default TodoForm;
export { TodoList };
