import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled.input`
  background: #e6ebff;
  outline: none;
  max-width: 487px;
  height: 76px;
  width: 100%;
  padding-left: 10px;
  &::placeholder {
    padding-left: 24px;
  }
`;

const StyledButton = styled.button`
  max-width: 108px;
  height: 76px;
  width: 100%;
  margin-right: 5px;
  padding: 1px;
  border-color: white;
  background-color: #5efc8d;
`;

const StyledTodoList = styled.div`
  width: 595px;
  height: 54px;
`;

const StyledTodoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px auto;
  color: white;
  background: linear-gradient(
    90deg,
    rgba(20, 159, 255, 1) 0%,
    rgba(17, 122, 255, 1) 100%
  );
  padding: 16px;
  border-radius: 5px;
  width: 90%;
`;

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
