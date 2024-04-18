// import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';

const Login = () => {
  return (
    <>
      <div className="containers">
        <div className="name">
          <h1>JOREAM</h1>
          <h4>JINHO OBEY RULE EVERYTHING AROUND ME</h4>
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
