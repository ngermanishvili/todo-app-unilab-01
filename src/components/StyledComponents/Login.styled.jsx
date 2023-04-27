import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 588px;
  width: 100%;
  height: 688px;
  margin: 40px auto;
  background-color: white;
  overflow: hidden;

  .Sign {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 258px;
    width: 100%;
    height: 66px;
    background-color: #5efc8d;
    font-size: 32px;
    margin-top: 76px;
  }
`;

export const Title = styled.h1`
  margin-top: 30px;
  font-size: 36px;
  font-weight: bold;
`;

export const PhotoText = styled.p`
  margin-top: 44px;
  font-size: 20px;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 122px;
  height: 122px;
  margin-top: 10px;
  border-radius: 50%;
  background-color: #e6ebff;
`;

export const NameText = styled.p`
  margin-top: 53px;
  font-size: 20px;
`;

export const Input = styled.input`
  max-width: 487px;
  height: 76px;
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #e6ebff;
`;
