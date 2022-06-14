import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import { StyledContainer } from "../../../styles/Container.style";
import { StyledSignIn } from "./Auth.style";

function SignIn() {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const userData = {
    userName: userName,
    password: password,
  };
  const handleSubmite = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <StyledSignIn>
      <StyledContainer>
        <div className="container">
          <div className="wrapper">
            <h2 className="auth_title">Вход в админку для Партнеров</h2>
            <div className="form_block">
              <Form layout="vertical">
                <Form.Item label="Логин">
                  <Input
                    size="large"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                  />
                </Form.Item>
                <Form.Item label="Пароль">
                  <Input.Password
                    size="large"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </Form.Item>
                <div className="sbt_block">
                  <Button type="primary" size="large" onClick={handleSubmite}>
                    Войти
                  </Button>
                  <Button type="link" size="large">
                    Зарегистрироваться
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </StyledContainer>
    </StyledSignIn>
  );
}

export default SignIn;