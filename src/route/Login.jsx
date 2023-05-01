import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FormContainer,
  Title,
  PhotoText,
  Circle,
  NameText,
  Input,
  SignInButton,
} from "../components/StyledComponents/Login/Login.styled";
import UploadImg from "../assets/uploadImage.svg";

const initialValue = {
  photo: "",
  name: "",
};

// Here I'm using sessionStorage to store the user's name and photo. If the user refreshes the page, the data is not lost. If the user closes the browser, the data is lost.
export const getSessionStorage = () => {
  let storedValues = sessionStorage.getItem("displayUser");
  return storedValues ? JSON.parse(storedValues) : initialValue;
};

const Login = () => {
  const [displayUser, setdisplayUser] = useState(getSessionStorage());
  // Here I'm using localStorage to store the user's name and photo. If the user refreshes the page, the data is not lost. If the user closes the browser, the data is not lost.
  const uploadPhoto = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result;
      setdisplayUser({ ...displayUser, photo: base64String });
    };
  };

  useEffect(() => {
    localStorage.setItem("displayUser", JSON.stringify(displayUser));
  }, [displayUser]);

  // this function is used to handle the name input. When the user types in the input, the value is stored in the displayUser state.
  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setdisplayUser({ ...displayUser, [name]: value });
  };

  // this function is used to handle the Sign In button. When the user clicks on the button, the user is redirected to the TodoList page.
  const handleSignIn = () => {
    localStorage.setItem("authenticated", true);
    localStorage.setItem("displayUser", JSON.stringify(displayUser));
    setAuthenticated(true);
  };

  // Here I check if the user has uploaded an image and entered a name with more than 3 characters. If yes, the Sign In button is enabled.
  const canSignIn = displayUser.photo && displayUser.name.length > 3;

  return (
    <FormContainer>
      <Title>Get started</Title>
      <PhotoText>Add a photo</PhotoText>
      <Circle>
        {displayUser.photo ? (
          <img src={displayUser.photo} alt="uploadedImg" />
        ) : (
          <label htmlFor="imageInput">
            <img src={UploadImg} alt="uploadImg" />
          </label>
        )}
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          onChange={uploadPhoto}
          style={{ display: "none" }}
        />
      </Circle>
      <NameText>Fill your name</NameText>

      <Input
        type="text"
        placeholder="Your name"
        name="name"
        value={displayUser.name}
        onChange={handleNameChange}
      />
      {displayUser.name.length > 0 && displayUser.name.length <= 3 && (
        <p style={{ color: "red" }}>Name must be more than 3 characters</p>
      )}
      {canSignIn ? (
        <Link className="Sign" to="/todolist" onClick={handleSignIn}>
          <SignInButton>Sign In</SignInButton>
        </Link>
      ) : (
        <SignInButton disabled>Sign In</SignInButton>
      )}
    </FormContainer>
  );
};

export default Login;
