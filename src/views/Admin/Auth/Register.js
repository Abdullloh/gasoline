import React, { useState } from "react";
import { Button, Form, Input, message, Radio } from "antd";
import { StyledContainer } from "../../../styles/Container.style";
import { StyledSignIn } from "./Auth.style";
import Axios from "../../../utils/axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [userName, setUserName] = useState(null);
  const [userType, setUserType] = useState(null);

  const [phoneNum, setPhoneNum] = useState(null);
  const [email, setEmail] = useState(null);
  const navigate = useNavigate();
  const [inn, setInn] = useState();
  const [password, setPassword] = useState();
  const [mfo, setMfo] = useState();
  const [compName, setCompName] = useState(null);
  const [company_address, setCompany_address] = useState(null);
  const [ceo_name, setCeo_name] = useState(null);
  const [bank_account, setBank_account] = useState(null);
  const [bank_name, setBank_name] = useState(null);
  const userData = {
    name: userName,
    phone: phoneNum,
    // bank_account: 1423164156,
    email: email,
    // mfo: 123654,
    // bank_name: "Kapital",
    // company_address: "Test",
    inn,
    company_name: compName,
    password,
    type: userType,
  };
  const partnerData = {
    name: userName,
    email,
    ceos_name: ceo_name,
    bank_name, 
    company_address,
    mfo,
    bank_account,
    inn,
    company_name: compName,
    phone: phoneNum,
    password,
    type: userType,
  }
  const handleSubmite = async (e) => {
    if (userType == null) {
      message.warning("CHoose your role");
    } else {
      e.preventDefault();
      if (userType == "partner") {
        try {
          const res = await Axios.post("/accounts/register/", {
           ...partnerData
          });
          console.log(res);
          const { status } = res;
          if (status == 201) {
            navigate("/sign-in");
          }
        } catch (error) {
          message.warn(error?.response?.data?.message);
        }
      } else {
        try {
          const res = await Axios.post("/accounts/register/", { ...userData });
          console.log(res);
          const { status } = res;
          if (status == 201) {
            navigate("/sign-in");
          }
        } catch (error) {
          message.warn(error?.response?.data?.message);
        }
      }
    }
  };

  const onChange = (e) => {
    setUserType(e.target.value);
  };

  return (
    <StyledSignIn>
      <StyledContainer>
        <div className="container">
          <div className="wrapper">
            <h2 className="auth_title">Регистрация</h2>
            <div className="form_block">
              <Form layout="vertical">
                <Form.Item>
                  <Radio.Group onChange={onChange} value={userType}>
                    <Radio value={"customer"}>Покупатель</Radio>
                    <Radio value={"partner"}>Поставщик</Radio>
                  </Radio.Group>
                </Form.Item>

                <Form.Item label="Ф.И.О.">
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
                {userType == "partner" ? (
                  <>
                    <Form.Item label="Ceo Name">
                      <Input
                        onChange={(e) => setCeo_name(e.target.value)}
                        value={ceo_name}
                      />
                    </Form.Item>
                    <Form.Item label="Bank Name">
                      <Input
                        onChange={(e) => setBank_name(e.target.value)}
                        value={bank_name}
                      />
                    </Form.Item>
                    <Form.Item label="Comp address">
                      <Input
                        onChange={(e) => setCompany_address(e.target.value)}
                        value={company_address}
                      />
                    </Form.Item>
                    <Form.Item label="MFO">
                      <Input
                        onChange={(e) => setMfo(e.target.value)}
                        value={mfo}
                      />
                    </Form.Item>
                    <Form.Item label="Bank Account">
                      <Input
                        onChange={(e) => setBank_account(e.target.value)}
                        value={bank_account}
                      />
                    </Form.Item>
                  </>
                ) : null}
                <Form.Item label="ИНН">
                  <Input onChange={(e) => setInn(e.target.value)} value={inn} />
                </Form.Item>
                <Form.Item label="Наименование организации ">
                  <Input
                    onChange={(e) => setCompName(e.target.value)}
                    value={compName}
                  />
                </Form.Item>
                <Form.Item label="Номер телефона">
                  <Input
                    onChange={(e) => setPhoneNum(e.target.value)}
                    value={phoneNum}
                  />
                </Form.Item>
                <Form.Item label="Пароль">
                  <Input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
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
