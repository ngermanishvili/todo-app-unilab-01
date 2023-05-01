import {
  Wrapper,
  LogoImg,
} from "../components/StyledComponents/Home/Home.styled";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Group3.svg";

const Home = () => {
  // this hook is used to navigate between pages in the app (like a <Link> component) but it can be used anywhere in the app.
  const navigate = useNavigate();

  // This handleclick is for the button in the Home page. When the user clicks on the button, the user is redirected to the Login page.
  const handleClick = () => {
    navigate("/login");
  };

  return (
    <Wrapper>
      <LogoImg src={Logo} />
      <h1>Keep Track Of Daily Tasks In Life</h1>
      <button className="btn" onClick={handleClick}>
        Get Started
      </button>
    </Wrapper>
  );
};

export default Home;
