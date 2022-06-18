import React, { useState } from "react";
import { Button, Form, Input, Radio } from "antd";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import { StyledContainer } from "../../../styles/Container.style";
import { StyledSignIn } from "./Auth.style";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../../utils/axios";
import { useDispatch } from "react-redux";
import { signUpAction } from "../../../store/actios/authAcions";

function SignIn() {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  const navigate = useNavigate();
  const userData = {
    login: userName,
    password: password,
  };
  const urlLink =
    value == "admin"
      ? "manager-login/"
      : value == "customer"
      ? "customer-login/"
      : value == "partner"
      ? "partner-login/"
      : "";
  const handleSubmite = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post(`/accounts/${urlLink}`, {
        ...userData,
      });
      console.log(res);
      const { data } = res;
      const { success } = data;
      console.log(data);
      if (success == true) {
        dispatch(signUpAction(data.data));
        localStorage.setItem("user", JSON.stringify(data.data));
        if(data?.admin?.role === "Customer"){
          navigate('/my-account')
        }else {
          window.location.reload()
        }
      }
    } catch (error) {}
  };
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <StyledSignIn>
      <StyledContainer>
        <div className="container">
          <div className="wrapper">
            <h2 className="auth_title">Вход в админку для Партнеров</h2>
            <div className="form_block">
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={"admin"}>Manager</Radio>
                <Radio value={"customer"}>Customer</Radio>
                <Radio value={"partner"}>Partner</Radio>
              </Radio.Group>
              <Form layout="vertical">
                <Form.Item label="Логин">
                  <Input
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                  />
                </Form.Item>
                <Form.Item label="Пароль">
                  <Input.Password
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </Form.Item>
                <div className="sbt_block">
                  <Button type="primary" onClick={handleSubmite}>
                    Войти
                  </Button>
                  <Link to="/sign-up">
                    <Button type="link">Зарегистрироваться</Button>
                  </Link>
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
