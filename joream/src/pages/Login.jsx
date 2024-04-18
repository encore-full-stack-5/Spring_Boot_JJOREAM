// import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';

import "../Login.css";

const Login = () => {
  return (
    <>
      <div className="containers">
        <div className="name">
          <h1 style={{ fontSize: "30px" }}>JOREAM</h1>
          <h4 style={{ fontSize: "13px" }}>
            JINHO OBEY RULE EVERYTHING AROUND ME
          </h4>
        </div>
        <form>
          <div className="idpass">
            <h3>이메일 주소</h3>
            <div>
              <input type="email" placeholder="예) joream@joream.co.kr" />
            </div>
            <h3>비밀번호</h3>
            <div>
              <input type="password" />
            </div>
            <div>
              <input type="submit" value="로그인"></input>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
