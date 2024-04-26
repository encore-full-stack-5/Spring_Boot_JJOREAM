import React, { useState, useEffect } from "react";
import { getUser } from "../api/myPage";
function MyPage() {
  const [isProfileNameEditing, setIsProfileNameEditing] = useState(false);
  const [isNameEditing, setIsNameEditing] = useState(false);
  const [isIntroEditing, setIsIntroEditing] = useState(false);
  const [memberData, setMemberData] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const user = getUser();
        console.log(user);
        setMemberData(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchData();
  }, []);

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
    console.log("수정된 멤버 데이터:", memberData);
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
                    placeholder={memberData ? memberData.name : ""}
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
                    placeholder={memberData ? memberData.name : ""}
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
