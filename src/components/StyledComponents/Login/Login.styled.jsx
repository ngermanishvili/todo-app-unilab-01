import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 588px;
  height: 688px;
  width: 100%;
  margin: 50px auto;
  background-color: white;

  @media (max-width: 1024px) {
    display: flex;
    width: 600px;
    height: 600px;
    max-width: 588px;
    background-color: white;
  }

  @media (max-width: 800px) {
    width: 90%;
    margin: 30px auto;
    height: 800px;
  }
  @media (max-width: 375px) {
    width: 90%;
    margin: 50px auto;
    height: 700px;
  }
`;

export const SignInButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 258px;
  height: 66px;
  background-color: ${(props) => (props.disabled ? "#f3f3f3" : "#5efc8d")};
  font-size: 32px;
  margin-top: 76px;
  color: #000000;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#f3f3f3" : "#000000")};
    color: ${(props) => (props.disabled ? "#000000" : "#ffffff")};
  }
  border-radius: 4px;
  margin-top: 76px;
  margin-bottom: 73px;
`;

export const Title = styled.h1`
  margin-top: 30px;
  font-size: 48px;
  font-weight: bold;
  font-family: "Poppins" sans-serif;
  font-weight: 600;
`;

export const PhotoText = styled.p`
  margin-top: 44px;
  font-size: 20px;
  cursor: pointer;
  font-weight: 300;
`;

export const Circle = styled.div`
  width: 100px;
  height: 120px;
  border-radius: 50%;
  background-color: #e1e1e1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  margin-top: 10px;

  @media (max-width: 1024px) {
    background-color: white;
  }

  &:hover {
    background-color: #5efc8d;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    cursor: pointer;
  }
`;

export const NameText = styled.p`
  margin-top: 53px;
  font-size: 20px;
  text-transform: lowercase;
  letter-spacing: 0px;
  font-family: "Poppins" sans-serif;
  font-weight: 300;
`;

export const Input = styled.input`
  max-width: 487px;
  height: 76px;
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #e6ebff;
  outline: none;

  @media (max-width: 414px) {
    width: 80%;
    height: 40px;
    margin-top: 35px;
  }
`;
