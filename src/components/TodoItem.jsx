import React, { useState } from "react";
import styled from "styled-components";
import CheckMark from "../assets/checkmark.svg";
import removeSvg from "../assets/remove.svg";

const TodoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto !important;
  margin-top: 16px !important;
  color: white;
  background: #000000;
  border-radius: 5px;
  max-width: 595px;
  height: 54px;
  width: 100%;
  opacity: ${(props) => (props.completed ? "0.1" : "1")};
`;

const TodoText = styled.div`
  padding-left: 24px;
  font-size: 22px;
`;

const SvgContainer = styled.div`
  padding: 12px;
  display: flex;
  cursor: pointer;
  align-items: center;
  & > img:first-child {
    margin-right: 30px;
    width: 24px;
    height: 17px;
  }
  & > img:last-child {
    width: 20px;
    height: 20px;
  }
`;

const TodoItem = ({ todo, removeTodo }) => {
  const [completed, setCompleted] = useState(false);

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
