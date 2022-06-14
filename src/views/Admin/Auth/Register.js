import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import { StyledContainer } from "../../../styles/Container.style";
import { StyledSignIn } from "./Auth.style";

function Register() {
  const [userName, setUserName] = useState(null);
  const [phoneNum, setPhoneNum] = useState(null);
  const [email, setEmail] = useState(null);
  const [compName, setCompName] = useState(null);
  const userData = {
    userName: userName,
    phoneNum: phoneNum,
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
            <h2 className="auth_title">Регистрация</h2>
            <div className="form_block">
              <Form layout="vertical">
                <Form.Item label="Ф.И.О.">
                  <Input
                    
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                  />
                </Form.Item>
                <Form.Item label="Номер телефона">
                  <Input
                    
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                  />
                </Form.Item>
                <Form.Item label="Email">
                  <Input
                    
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </Form.Item>
                <Form.Item label="Название компании">
                  <Input
                    
                    onChange={(e) => setCompName(e.target.value)}
                    value={compName}
                  />
                </Form.Item>
                <div className="sbt_block">
                  <Button type="primary"  onClick={handleSubmite}>
                    Войти
                  </Button>
                  <Button type="link" >
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

export default Register;
