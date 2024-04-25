import { useEffect, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { useRecoilState } from "recoil";
import {
  brandProducts,
  getAllProducts,
  nameProducts,
} from "../api/productList";
import { ProductListState } from "../store/product";

const Search = (props) => {
  const { showModal, setShowModal, searchWord } = props;
  let [data, setData] = useRecoilState(ProductListState);
  const [isLoading, setIsLoading] = useState(true);
  const [inputValue, setInputValue] = useState(searchWord);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      let data = [];
      // inputValue 값에 따라 다른 API 함수 호출
      if (inputValue === "에어포스" || inputValue === "스투시") {
        const response = await nameProducts(inputValue);
        data = response.data;
      } else if (inputValue === "나이키") {
        const response = await brandProducts(1);
        data = response.data;
      } else if (inputValue === "아디다스") {
        const response = await brandProducts(2);
        data = response.data;
      } else {
        // 기본적으로 모든 제품을 가져오는 경우
        const response = await getAllProducts();
        data = response.data;
      }
      setData(data); // 상태 업데이트
      // const moreInfo = data.map((el) => ({
      //   ...el,
      // }));
      // setData(moreInfo);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setInputValue(e.target.value);
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (inputValue) {
      fetchData();
    }
  }, [inputValue]);

  return (
    <>
      {/* 모달 컴포넌트 */}
      <Modal show={showModal} onHide={handleClose} fullscreen={true}>
        <Modal.Header
          closeButton
          style={{
            marginTop: "5px",
            height: "3%",
          }}
        ></Modal.Header>
        <Modal.Body>
          {/* 모달 내용 */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              height: "10%",
            }}
          >
            <input
              type="text"
              placeholder="검색"
              defaultValue={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              style={{
                fontSize: "1.5rem", // 글자 크기 조정
                border: "none", // 모든 테두리 제거
                borderBottom: "3px solid black", // 아래쪽 테두리만 추가
                padding: "10px", // 패딩으로 입력 창 내부 여백 조정
                outline: "none", // 선택 시 테두리 없앰
                width: "50%", // 입력 창 너비
              }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "85%",
                height: "100%",
                justifyContent: "center",
                backgroundColor: "whitesmoke",
              }}
            >
              {isLoading ? (
                <p>loading...</p>
              ) : (
                data.map((el, id) => (
                  <div
                    key={id}
                    style={{
                      margin: "10px",
                    }}
                  >
                    {/* {console.log(el)} */}
                    <Card
                      style={{
                        width: "13rem",
                        padding: "10px",
                        borderRadius: "20px",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src="../../public/nike_air_force_1_black.png"
                        style={{
                          width: "200px",
                          height: "240px",
                          alignSelf: "center",
                        }}
                      />
                      <Card.Body>
                        <Card.Title
                          style={{
                            textAlign: "Left",
                          }}
                        >
                          <p>{el.brandName}</p>
                        </Card.Title>
                        <Card.Text
                          style={{
                            textAlign: "Left",
                          }}
                        >
                          {el.productName}
                          <br />
                          {el.releasePrice}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                ))
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Search;
