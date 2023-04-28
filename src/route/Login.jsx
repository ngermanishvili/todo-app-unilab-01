import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  FormContainer,
  Title,
  PhotoText,
  Circle,
  NameText,
  Input,
  SignInButton,
} from "../components/StyledComponents/Login.styled";
import UploadImg from "../assets/uploadImage.svg";

const Login = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  // With this snippet, authenticated is set to true if the user is authenticated. Otherwise, it is set to false.
  const [authenticated, setAuthenticated] = useState(false);

  // With this snippet, we check if the user is authenticated when the component is mounted.
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authenticated");
    if (isAuthenticated) {
      setAuthenticated(true);
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    localStorage.setItem("userImage", URL.createObjectURL(file));
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    localStorage.setItem("name", value);
  };

  const handleSignIn = () => {
    localStorage.setItem("authenticated", true);
    setAuthenticated(true);
  };

  // Here I Check if the user is authenticated, if yes, redirect to /todolist else, show the login page.
  if (authenticated) {
    return <Navigate to="/todolist" />;
  }

  // Here I check if the user has uploaded an image and entered a name with more than 3 characters. If yes, the Sign In button is enabled.
  const canSignIn = image && name.length > 3;

  return (
    <FormContainer>
      <Title>Get started</Title>
      <PhotoText>Add a photo</PhotoText>
      <Circle>
        {image ? (
          <img src={URL.createObjectURL(image)} alt="uploadedImg" />
        ) : (
          <label htmlFor="imageInput">
            <img src={UploadImg} alt="uploadImg" />
          </label>
        )}

        <input
          type="file"
          id="imageInput"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
      </Circle>
      <NameText>Fill your name</NameText>
      <Input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={handleNameChange}
      />
      {canSignIn ? (
        <Link className="Sign" to="/todolist" onClick={handleSignIn}>
          <SignInButton>Sign In</SignInButton>
        </Link>
      ) : (
        <SignInButton disabled>Sign In</SignInButton>
      )}
      {name.length > 0 && name.length <= 3 && (
        <p style={{ color: "red", margin: "8px 0" }}>
          Name must be more than 3 characters
        </p>
      )}
    </FormContainer>
  );
};

export default Login;
