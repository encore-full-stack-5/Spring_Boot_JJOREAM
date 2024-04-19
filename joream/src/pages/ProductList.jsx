import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { useState } from "react";

const ProductList = () => {
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  // onClickShow = () => {
  //   setCategory(true);
  // };

  return (
    <div
      style={{
        width: "100vw",
        paddingTop: "120px",
        margin: "0 auto",
        // display: "block", // Flex 컨테이너로 설정
        // justifyContent: "center", // 수평 중앙 정렬
      }}
    >
      <div
        style={{
          display: "flex", // Flex 컨테이너로 설정
          justifyContent: "center", // 수평 중앙 정렬
          margin: "0 auto",
          width: "100%",
          height: "150px",
          backgroundColor: "white",
          paddingLeft: "40px",
          paddingRight: "40px",
          overflowX: "hidden",
        }}
      >
        <div
          style={{
            margin: "0 65px",
            padding: "0 40px",
            backgroundColor: "whitesmoke",
            width: "100%",
            borderBottom: "1px solid darkgray",
            // maxWidth: "600px",
          }}
        ></div>
      </div>
      <br />

      <div
        style={{
          display: "flex",
          margin: "0 65px",
          padding: "0 40px",
        }}
      >
        <div
          style={{
            marginRight: "5px",
            width: "15%",
            height: "80vh",
            backgroundColor: "whitesmoke",
          }}
        >
          <button
            style={{
              borderRadius: "0px",
              width: "100%",
              textAlign: "left",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => setCategory(!category)}
          >
            카테고리
          </button>
          {category ? (
            <div
              style={{
                margin: "3px 8px",
                textAlign: "left",
              }}
            >
              <div>
                <input id="shoes" type="checkbox" />
                <label
                  htmlFor="shoes"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  신발
                </label>
              </div>

              <div>
                <input id="clothes" type="checkbox" />
                <label
                  htmlFor="clothes"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  의류
                </label>
              </div>

              <div>
                <input id="stuff" type="checkbox" />
                <label
                  htmlFor="stuff"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  잡화
                </label>
              </div>
            </div>
          ) : (
            ""
          )}

          <hr />

          <button
            style={{
              borderRadius: "0px",
              width: "100%",
              textAlign: "left",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => setBrand(!brand)}
          >
            브랜드
          </button>
          {brand ? (
            <div
              style={{
                margin: "3px 8px",
                textAlign: "left",
              }}
            >
              <div>
                <input id="nike" type="checkbox" />
                <label
                  htmlFor="nike"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  나이키
                </label>
              </div>

              <div>
                <input id="adidas" type="checkbox" />
                <label
                  htmlFor="adidas"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  아디다스
                </label>
              </div>
            </div>
          ) : (
            ""
          )}

          <hr />
        </div>
        <div
          style={{
            width: "85%",
            height: "80vh",
            backgroundColor: "whitesmoke",
          }}
        >
          <div
            style={{
              display: "flex",
              backgroundColor: "gray",
            }}
          >
            <div
              style={{
                margin: "10px",
              }}
            >
              <Card
                style={{
                  width: "14rem",
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
                    Brand
                  </Card.Title>
                  <Card.Text
                    style={{
                      textAlign: "Left",
                    }}
                  >
                    Model name ex.Nike Air Force 1 '07 Low Triple Black
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
