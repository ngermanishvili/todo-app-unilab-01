import React, { useState } from "react";
import CheckMark from "../assets/checkmark.svg";
import removeSvg from "../assets/remove.svg";
import {
  TodoRow,
  TodoText,
  SvgContainer,
} from "./StyledComponents/TodoItem/TodoItem.styled";


// this todo and remove todo is comign from the todolist.jsx 
const TodoItem = ({ todo, removeTodo }) => {
  const [completed, setCompleted] = useState(false);

  // this function is used to change the state of the todo item to completed when the user clicks on the checkmark icon. 
  const handleCheckmarkClick = () => {
    setCompleted(true);
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
