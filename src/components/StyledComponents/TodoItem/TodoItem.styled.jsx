import styled from "styled-components";

export const TodoRow = styled.div`
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
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
`;

export const TodoText = styled.div`
  padding-left: 24px;
  font-size: 22px;
`;

export const SvgContainer = styled.div`
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
