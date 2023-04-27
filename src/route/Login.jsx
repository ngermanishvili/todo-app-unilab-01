import {
  FormContainer,
  Title,
  PhotoText,
  Circle,
  NameText,
  Input,
  SignInButton,
} from "../components/StyledComponents/Login.styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import UploadImg from "../assets/uploadImage.svg";

const Login = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");

  // this function will be called when the user selects an image
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  // this function will be called when the user types in the name input
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // this variable is used to determine whether the user can sign in or not
  const canSignIn = image && name.length > 3;

  return (
    <FormContainer>
      <Title>Get started</Title>
      <PhotoText>Add a photo</PhotoText>
      <Circle>
        {/* this is the image preview section that will be shown to the user when they select an image file from their device  */}
        {image ? (
          <img src={URL.createObjectURL(image)} alt="uploadedImg" />
        ) : (
          <label htmlFor="imageInput">
            <img src={UploadImg} alt="uploadImg" />
          </label>
        )}

        {/* this input is hidden, but it will be triggered when the user clicks on the image preview section */}
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
      {/* // In Here i'm checking if the user can sign in or not. If the user can
      sign in, the button will be enabled, otherwise it will be disabled. */}
      {canSignIn ? (
        <Link className="Sign" to="/todolist">
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
