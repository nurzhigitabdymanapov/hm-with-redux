import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Calculator } from "../pages/Calculator";
import { styled } from "styled-components";

export const Auth = () => {
  const auth = useSelector((state) => state.auth.auth);

  const dispath = useDispatch();

  const loginUser = () => {
    dispath({ type: "LOGIN" });
  };

  const logoutUser = () => {
    dispath({ type: "LOGOUT" });
  };
  return (
    <div>
      <Div>
        <header>
          {auth ? (
            <Button onClick={logoutUser}>LOGIN</Button>
          ) : (
            <>
              <Button onClick={loginUser}>LOGOUT</Button>
              <Calculator />
            </>
          )}
        </header>
      </Div>
    </div>
  );
};
const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  header {
    background-color: #118908;
    padding: 30px 40px;
    border-radius: 12px;
    text-align: center;
    
  }
`;
const Button = styled.button`
  width: 100px;
  margin: 10px;
  height: 30px;
`