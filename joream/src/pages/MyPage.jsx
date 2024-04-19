// import { useState } from "react";

// // import { login, register } from "../api/auth";
// const MyPage = () => {
//   const handleClick = () => {
//     setIsClicked(true);
//   };

//   return (
//     <>
//       <div className="main">
//         <div className="main-left">
//           <a className="title">마이페이지</a>
//           <div className="shopping-info">
//             <a style={{ fontWeight: "bold" }}>쇼핑 정보</a>
//             <li className="shopping-list">
//               <a>구매 내역</a>
//             </li>
//             <li className="shopping-list">
//               <a>판매 내역</a>
//             </li>
//             <li className="shopping-list">
//               <a>관심</a>
//             </li>
//           </div>
//           <div className="shopping-info">
//             <a style={{ fontWeight: "bold" }}>내 정보</a>
//             <li className="shopping-list">
//               <a>회원 정보</a>
//             </li>
//             <li className="shopping-list">
//               <a>포인트</a>
//             </li>
//           </div>
//         </div>

//         <div
//           className="main-right"
//           style={{ fontWeight: "bold", fontSize: "24px" }}
//         >
//           마이페이지
//           <hr
//             style={{
//               border: "0px",
//               borderBottom: "4px solid black",
//               borderColor: "black",
//               opacity: 1,
//               width: "97%",
//               marginTop: "10px",
//             }}
//           />
//           <div>
//             <div style={{ fontWeight: "bold", fontSize: "18px" }}>
//               프로필 정보
//             </div>
//             <div style={{ fontWeight: "bold", fontSize: "18px" }}>
//               프로필 이름
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default MyPage;

import React, { useState } from "react";

function MyPage() {
  const [isProfileNameEditing, setIsProfileNameEditing] = useState(false);
  const [isNameEditing, setIsNameEditing] = useState(false);
  const [isIntroEditing, setIsIntroEditing] = useState(false);
  const [memberData, setMemberData] = useState({
    // 멤버 데이터 초기 상태
    // 예를 들어, 이름(name), 이메일(email) 등의 필드가 있다고 가정합니다.
  });

  const handleProfileNameToggleEdit = () => {
    setIsProfileNameEditing((prevState) => !prevState);
  };
  const handleNameToggleEdit = () => {
    setIsNameEditing((prevState) => !prevState);
  };

  const handleIntroToggleEdit = () => {
    setIsIntroEditing((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMemberData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 수정된 멤버 데이터를 처리하는 함수를 호출하거나 상태를 업데이트합니다.
    // 예를 들어, 서버로 데이터를 보내거나 로컬 상태를 업데이트할 수 있습니다.
    console.log("수정된 멤버 데이터:", memberData);
    // 여기에 실제로 서버로 데이터를 보내는 로직을 추가할 수 있습니다.
    // setMemberData({}); // 폼을 초기화하거나 다른 작업을 수행할 수도 있습니다.
  };

  return (
    <>
      <div className="main">
        <div className="main-left">
          <a className="title">마이페이지</a>
          <div className="shopping-info">
            <a style={{ fontWeight: "bold" }}>쇼핑 정보</a>
            <li className="shopping-list">
              <a>구매 내역</a>
            </li>
            <li className="shopping-list">
              <a>판매 내역</a>
            </li>
            <li className="shopping-list">
              <a>관심</a>
            </li>
          </div>
          <div className="shopping-info">
            <a style={{ fontWeight: "bold" }}>내 정보</a>
            <li className="shopping-list">
              <a>회원 정보</a>
            </li>
            <li className="shopping-list">
              <a>포인트</a>
            </li>
          </div>
        </div>

        <div
          className="main-right"
          style={{ fontWeight: "bold", fontSize: "24px" }}
        >
          마이페이지
          <hr
            style={{
              border: "0px",
              borderBottom: "4px solid black",
              borderColor: "black",
              opacity: 1,
              width: "97%",
              marginTop: "10px",
            }}
          />
          <div>
            <div style={{ fontWeight: "bold", fontSize: "18px" }}>
              프로필 정보
            </div>
            <hr></hr>
            <div
              style={{ fontWeight: "bold", fontSize: "14px", color: "grey" }}
            >
              프로필 이름
            </div>
            {/* 변경부분 */}
            <div>
              <button
                onClick={handleProfileNameToggleEdit}
                style={{
                  width: "calc(100% / 3)",
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "grey",
                }}
              >
                {isProfileNameEditing ? "변경 완료" : "변경"}
              </button>
              {isProfileNameEditing && (
                <form
                  style={{
                    width: "calc(100% / 3)",
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "grey",
                  }}
                  onSubmit={handleSubmit}
                >
                  {/* 이 곳에 수정할 멤버 데이터의 입력 폼을 추가합니다. */}
                  {/* 예를 들어, 이름(name), 이메일(email) 등의 필드를 입력할 수 있습니다. */}
                  <input
                    type="text"
                    name="name"
                    value={memberData.name || ""}
                    onChange={handleInputChange}
                    placeholder="프로필 이름"
                    style={{
                      width: "100%",
                      fontSize: "13px",
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      transition: "border-color 0.3s ease",
                      color: "#333",
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "grey",
                    }}
                  >
                    저장
                  </button>
                </form>
              )}
            </div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                color: "grey",
                marginTop: "20px",
              }}
            >
              이름
            </div>
            {/* 변경부분 */}
            <div>
              <button
                onClick={handleNameToggleEdit}
                style={{
                  width: "calc(100% / 3)",
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "grey",
                }}
              >
                {isNameEditing ? "변경 완료" : "변경"}
              </button>
              {isNameEditing && (
                <form
                  style={{
                    width: "calc(100% / 3)",
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "grey",
                  }}
                  onSubmit={handleSubmit}
                >
                  {/* 이 곳에 수정할 멤버 데이터의 입력 폼을 추가합니다. */}
                  {/* 예를 들어, 이름(name), 이메일(email) 등의 필드를 입력할 수 있습니다. */}
                  <input
                    type="text"
                    name="name"
                    value={memberData.name || ""}
                    onChange={handleInputChange}
                    placeholder="이름"
                    style={{
                      width: "100%",
                      fontSize: "13px",
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      transition: "border-color 0.3s ease",
                      color: "#333",
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "grey",
                    }}
                  >
                    저장
                  </button>
                </form>
              )}
            </div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                color: "grey",
                marginTop: "20px",
              }}
            >
              소개
            </div>
            {/* 변경부분 */}
            <div>
              <button
                onClick={handleIntroToggleEdit}
                style={{
                  width: "calc(100% / 3)",
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "grey",
                }}
              >
                {isIntroEditing ? "변경 완료" : "변경"}
              </button>
              {isIntroEditing && (
                <form
                  style={{
                    width: "calc(100% / 3)",
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "grey",
                  }}
                  onSubmit={handleSubmit}
                >
                  {/* 이 곳에 수정할 멤버 데이터의 입력 폼을 추가합니다. */}
                  {/* 예를 들어, 이름(name), 이메일(email) 등의 필드를 입력할 수 있습니다. */}
                  <input
                    type="text"
                    name="name"
                    value={memberData.name || ""}
                    onChange={handleInputChange}
                    placeholder="소개"
                    style={{
                      width: "100%",
                      fontSize: "13px",
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      transition: "border-color 0.3s ease",
                      color: "#333",
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "grey",
                    }}
                  >
                    저장
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPage;
