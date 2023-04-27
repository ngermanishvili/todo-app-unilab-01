import styled from "styled-components";


export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledInput = styled.input`
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

export const StyledButton = styled.button`
  max-width: 108px;
  height: 76px;
  width: 100%;
  margin-right: 5px;
  padding: 1px;
  border-color: white;
  background-color: #5efc8d;
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
  background: linear-gradient(
    90deg,
    rgba(20, 159, 255, 1) 0%,
    rgba(17, 122, 255, 1) 100%
  );
  padding: 16px;
  border-radius: 5px;
  width: 90%;
`;