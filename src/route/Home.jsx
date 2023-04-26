import { Link } from "react-router-dom";
import Sign from "./Todo";
import Logo from "../assets/Group3.svg";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <LogoImg src={Logo} />

      <h1>Keep Track Of Daily Tasks In Life</h1>

      <Link className="btn" to="/login">
        <span>Get Started</span>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-top: 46px;
    text-align: center;
    color: #fff;
    font-size: 54px;
  }

  .btn {
    margin-top: 165px;
    background-color: #5efc8d;
    max-width: 388px;
    width: 100%;
    height: 98px;
  }

  @media only screen and (max-width: 480px) {
    .btn {
      width: 300px;
      height: 50px;
      margin-top: 150px;
    }
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
  }
`;

const LogoImg = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 74px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export default Home;
