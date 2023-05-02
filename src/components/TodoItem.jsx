import React, { useState } from "react";
import CheckMark from "../assets/checkmark.svg";
import removeSvg from "../assets/remove.svg";
import {
  TodoRow,
  TodoText,
  SvgContainer,
} from "./StyledComponents/TodoItem/TodoItem.styled";

const TodoItem = ({ todo, removeTodo }) => {
  const [completed, setCompleted] = useState(false);

  const handleCheckmarkClick = () => {
    setCompleted(!completed);
  };

  return (
    <TodoRow completed={completed}>
      <TodoText completed={completed}>{todo.text}</TodoText>
      <SvgContainer>
        <img src={CheckMark} onClick={handleCheckmarkClick} />
        <img src={removeSvg} onClick={() => removeTodo(todo.id)} />
      </SvgContainer>
    </TodoRow>
  );
};

export default TodoItem;
