import React, { useState } from "react";
import { Button, Form, Input } from "antd";
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
    email: email,
    compName: compName,
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
                    onChange={(e) => setPhoneNum(e.target.value)}
                    value={phoneNum}
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
                <div className="sbt_block" style={{"justify-content": "center"}}>
                  <Button type="primary" onClick={handleSubmite}>
                    Отправить заявку
                  </Button>
                </div>
              </Form>
            </div>
            <p>
              При входе и регистрации вы соглашаетесь с Условиями использования
              сайта <br/> и Политикой обработки персональных данных.
            </p>
          </div>
        </div>
      </StyledContainer>
    </StyledSignIn>
  );
}

export default Register;
