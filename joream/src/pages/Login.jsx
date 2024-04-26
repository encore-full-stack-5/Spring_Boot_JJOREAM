import axios from "axios";
import React, { useState } from "react";
import { login } from "../api/register";
import { useNavigate, useLocation } from "react-router-dom";
import "../Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    const formData = {
      email: email,
      password: password,
    };

    try {
      const { data } = await login(formData);
      console.log(data);
      localStorage.setItem("token", data);
    } catch (error) {
      console.log("Error:", error);
    }

    navigate("/shop");
  };

  return (
    <>
      <div className="containers">
        <div className="name">
          <h1 style={{ fontSize: "30px" }}>JOREAM</h1>
          <h4 style={{ fontSize: "13px" }}>
            JINHO OBEY RULE EVERYTHING AROUND ME
          </h4>
        </div>
        <form onSubmit={submit}>
          <div className="idpass">
            <h3>이메일 주소</h3>
            <div>
              <input
                type="email"
                placeholder="예) joream@joream.co.kr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <h3>비밀번호</h3>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <input
                type="submit"
                value="로그인"
                onClick={(e) => submit(e)}
              ></input>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
