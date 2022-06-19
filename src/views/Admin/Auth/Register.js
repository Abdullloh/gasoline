import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { StyledContainer } from "../../../styles/Container.style";
import { StyledSignIn } from "./Auth.style";
import Axios from "../../../utils/axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [userName, setUserName] = useState(null);
  const [phoneNum, setPhoneNum] = useState(null);
  const [email, setEmail] = useState(null);
  const navigate = useNavigate();
  const [compName, setCompName] = useState(null);
  const userData = {
    name: userName,
    phone: phoneNum,
    email: email,
    company_name: compName,
    inn: "123",
    password: "123",
  };
  const handleSubmite = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post("/accounts/register/", { ...userData });
      console.log(res);
      const { status } = res;
      if (status == 201) {
        navigate("/sign-in");
      }
    } catch (error) {
      message.warn(error?.response?.data?.message)
    }
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
                <div
                  className="sbt_block"
                  style={{ "justify-content": "center" }}
                >
                  <Button type="primary" onClick={handleSubmite}>
                  Регистрироваться
                  </Button>
                </div>
              </Form>
            </div>
            <p>
              При входе и регистрации вы соглашаетесь с Условиями использования
              сайта <br /> и Политикой обработки персональных данных.
            </p>
          </div>
        </div>
      </StyledContainer>
    </StyledSignIn>
  );
}

export default Register;
