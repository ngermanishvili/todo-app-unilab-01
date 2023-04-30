import {
  Wrapper,
  LogoImg,
} from "../components/StyledComponents/Home/Home.styled";
import { Link } from "react-router-dom";
import Logo from "../assets/Group3.svg";

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

export default Home;
