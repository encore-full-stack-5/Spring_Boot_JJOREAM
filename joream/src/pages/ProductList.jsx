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
    <div>
      <div
        style={{
          margin: "0 auto",
          width: "100%",
          height: "150px",
          backgroundColor: "yellow",
          paddingLeft: "40px",
          paddingRight: "40px",
          overflowX: "hidden",
        }}
      >
        <div
          style={{
            padding: "16px 0",
            backgroundColor: "yellowgreen",
          }}
        ></div>
      </div>
      <br />

      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            margin: "0 5px",
            width: "15%",
            height: "80vh",
            backgroundColor: "wheat",
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
            margin: "0 5px",
            width: "85%",
            height: "80vh",
            backgroundColor: "yellowgreen",
          }}
        >
          <div
            className="justify-content-around"
            style={{
              display: "flex",
              backgroundColor: "yellowgreen",
            }}
          >
            <div
              style={{
                margin: "10px",
                backgroundColor: "white",
              }}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                    <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder.Button variant="primary" xs={6} />
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
