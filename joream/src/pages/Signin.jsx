import axios from "axios";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { signup } from "../api/register";
import { useNavigate } from "react-router-dom";
import "../Signin.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    const formData = {
      email: email,
      password: password,
      username: name,
      address: address,
    };
    try {
      const data = await signup(formData);
    } catch (error) {
      console.error("Error:", error);
    }
    navigate("/login");
  };

  return (
    <>
      <div className="containers">
        <div className="name">
          <h2>회원가입</h2>
        </div>
        <form onSubmit={submit}>
          <div className="idpass">
            <h3>이메일 주소*</h3>
            <div>
              <input
                type="email"
                placeholder="예) joream@joream.co.kr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <h3>비밀번호*</h3>
            <div>
              <input
                type="password"
                placeholder="영문, 숫자, 특수문자 조합 8-16자"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <h3>이름*</h3>
            <div>
              <input
                type="text"
                placeholder="이름을 입력하세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <h3>주소*</h3>
            <div>
              <input
                type="text"
                placeholder="주소를 입력하세요"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <h3>추천인 코드</h3>
            <div>
              <input type="text" placeholder="추천인 코드를 입력하세요 " />
            </div>
            <h3>신발 사이즈</h3>
            <Form.Select
              aria-label="Default select example"
              style={{ height: "48px" }}
            >
              <option>선택하세요</option>
              <option value="1">220</option>
              <option value="2">225</option>
              <option value="3">230</option>
              <option value="4">235</option>
              <option value="5">240</option>
              <option value="6">245</option>
              <option value="7">250</option>
              <option value="8">255</option>
              <option value="9">260</option>
              <option value="10">265</option>
              <option value="11">270</option>
              <option value="12">275</option>
              <option value="13">280</option>
              <option value="14">285</option>
              <option value="15">290</option>
              <option value="16">295</option>
              <option value="17">300</option>
            </Form.Select>
            <div>
              <input
                type="submit"
                value="가입하기"
                onClick={(e) => submit(e)}
              ></input>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
