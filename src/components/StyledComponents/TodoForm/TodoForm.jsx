import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: "Poppins", sans-serif;
  margin-bottom: 51px;
`;

export const StyledInput = styled.input`
  background: #e6ebff;
  outline: none;
  max-width: 487px;
  height: 76px;
  width: 100%;
  border-radius: 4px;
  text-indent: 24px;
`;

export const StyledButton = styled.button`
  max-width: 108px;
  height: 76px;
  width: 100%;
  margin-right: 5px;
  padding: 1px;
  border-color: white;
  background-color: #5efc8d;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  font-size: 32px;
  font-weight: 300;
`;

export const StyledTodoList = styled.div`
  width: 595px;
  height: 54px;
`;

export const StyledTodoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px auto;
  color: white;
  padding: 16px;
  border-radius: 5px;
  width: 90%;
`;
