import React, { useState } from "react";
import { styled } from "styled-components";

export const ValidInput = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState();
  const [passwordDirty, setPasswordDirty] = useState();
  const [formValid, setFormValid] = useState(false);

  const validEmail = (e) => {
    setEmail(e.target.value);
    setFormValid(e.target.value.includes("@") && password.trim().length >= 8);
  };
  const validPassword = (e) => {
    setPassword(e.target.value);
    setFormValid(e.target.value.trim().length >= 8 && email.includes("@"));
  };
  const blurEmailHandler = () => {
    setEmailDirty(email.includes("@"));
  };
  const blurPasswordHandler = () => {
    setPasswordDirty(password.trim().length >= 8);
  };
  return (
    <Container>
      <h1>{validEmail}</h1>
      <input
        onBlur={blurEmailHandler}
        name="email"
        onChange={validEmail}
        type="email"
        value={email}
        style={
          emailDirty === false
            ? { backgroundColor: "#f1baba" }
            : { backgroundColor: "#ffffff" }
        }
      />
      <br />
      <input
        onBlur={blurPasswordHandler}
        name="password"
        onChange={validPassword}
        type="password"
        value={password}
        style={
          passwordDirty === false
            ? { backgroundColor: "#f1baba" }
            : { backgroundColor: "#ffffff" }
        }
      />
      <br />
      <button onClick={login} disabled={!formValid}>
        LOGIN
      </button>
    </Container>
  );
};
const Container = styled.div`
  width: 500px;
  height: 300px;
  background-color: #118908;
  margin-top: 100px;
  padding: 50px 50px;
  border-radius: 12px;
  text-align: center;
  input {
    margin-top: 20px;
    width: 400px;
    height: 40px;
    border-radius: 22px;
    border: 0;
    text-align: center;
  }
  button {
    margin: 30px 0;
    width: 150px;
    height: 40px;
    border-radius: 22px;
    border: 0;
    font-size: large;
    transition: 0.3s;
    &:hover {
      background-color: #959bed;
      color: #fff;
    }
    &:active {
      background-color: #3b5f74;
    }
  }
`;
