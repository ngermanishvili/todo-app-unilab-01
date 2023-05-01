import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  h1 {
    margin-top: 46px;
    text-align: center;
    color: #fff;
    font-size: 54px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }

  .btn {
    margin-top: 165px;
    background-color: #5efc8d;
    max-width: 388px;
    width: 100%;
    height: 98px;
    border-radius: 4px;
  }

  .btn:hover {
    background-color: #fff;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #000;
    font-size: 48px;
    height: 100%;
    list-style: none;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
  }

  @media only screen and (max-width: 800px) {
    h1 {
      font-size: 36px;
      margin-top: 24px;
    }

    .btn {
      margin-top: 200px;
      height: 60px;
      width: 200px;
    }

    span {
      font-size: 36px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .btn {
      margin-top: 150px;
      height: 60px;
      width: 200px;
    }
  }
`;

export const LogoImg = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 74px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width: 800px) {
    margin-top: 24px;
  }
`;
