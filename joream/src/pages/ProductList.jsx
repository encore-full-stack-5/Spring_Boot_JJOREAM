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
  const [coordinate, setCoordinate] = useState("0px");
  // onClickShow = () => {
  //   setCategory(true);
  // };

  return (
    <div
      style={{
        width: "100%",
        paddingTop: "20px",
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
          height: "180px",
          backgroundColor: "white",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        <div
          style={{
            margin: "0 65px",
            padding: "0 10px",
            backgroundColor: "whitesmoke",
            width: "100%",
            borderBottom: "1px solid darkgray",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              id="ddd"
              style={{
                display: "flex",
                // transform: "translate(" + { coordinate } + "px)",
                transform: `translate(${coordinate})`,
                transition: "transform 0.5s ease-in-out", // 모션 효과 추가
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  width: "100px",
                  margin: "5px 15px",
                }}
              >
                <img
                  src="../../public/nike_air_force_1_black.png"
                  style={{
                    width: "100%",
                    height: "100px",
                    alignSelf: "center",
                  }}
                />
                <p>옵션1</p>
              </div>
              <div
                style={{
                  display: "inline-block",
                  width: "100px",
                  margin: "5px 15px",
                }}
              >
                <img
                  src="../../public/nike_air_force_1_black.png"
                  style={{
                    width: "100%",
                    height: "100px",
                    alignSelf: "center",
                  }}
                />
                <p>옵션2</p>
              </div>

              <div
                style={{
                  display: "inline-block",
                  width: "100px",
                  margin: "5px 15px",
                }}
              >
                <img
                  src="../../public/nike_air_force_1_black.png"
                  style={{
                    width: "100%",
                    height: "100px",
                    alignSelf: "center",
                  }}
                />
                <p>옵션3</p>
              </div>

              <div
                style={{
                  display: "inline-block",
                  width: "100px",
                  margin: "5px 15px",
                }}
              >
                <img
                  src="../../public/nike_air_force_1_black.png"
                  style={{
                    width: "100%",
                    height: "100px",
                    alignSelf: "center",
                  }}
                />
                <p>옵션4</p>
              </div>

              <div
                style={{
                  display: "inline-block",
                  width: "100px",
                  margin: "5px 15px",
                }}
              >
                <img
                  src="../../public/nike_air_force_1_black.png"
                  style={{
                    width: "100%",
                    height: "100px",
                    alignSelf: "center",
                  }}
                />
                <p>옵션5</p>
              </div>

              <div
                style={{
                  display: "inline-block",
                  width: "100px",
                  margin: "5px 15px",
                }}
              >
                <img
                  src="../../public/nike_air_force_1_black.png"
                  style={{
                    width: "100%",
                    height: "100px",
                    alignSelf: "center",
                  }}
                />
                <p>옵션6</p>
              </div>

              <div
                style={{
                  display: "inline-block",
                  width: "100px",
                  margin: "5px 15px",
                }}
              >
                <img
                  src="../../public/nike_air_force_1_black.png"
                  style={{
                    width: "100%",
                    height: "100px",
                    alignSelf: "center",
                  }}
                />
                <p>옵션7</p>
              </div>

              <div
                style={{
                  display: "inline-block",
                  width: "100px",
                  margin: "5px 15px",
                }}
              >
                <img
                  src="../../public/nike_air_force_1_black.png"
                  style={{
                    width: "100%",
                    height: "100px",
                    alignSelf: "center",
                  }}
                />
                <p>옵션8</p>
              </div>

              <div
                style={{
                  display: "inline-block",
                  width: "100px",
                  margin: "5px 15px",
                }}
              >
                <img
                  src="../../public/nike_air_force_1_black.png"
                  style={{
                    width: "100%",
                    height: "100px",
                    alignSelf: "center",
                  }}
                />
                <p>옵션9</p>
              </div>

              <div
                style={{
                  display: "inline-block",
                  width: "100px",
                  margin: "5px 15px",
                }}
              >
                <img
                  src="../../public/nike_air_force_1_black.png"
                  style={{
                    width: "100%",
                    height: "100px",
                    alignSelf: "center",
                  }}
                />
                <p>옵션10</p>
              </div>

              <div
                style={{
                  display: "inline-block",
                  width: "100px",
                  margin: "5px 15px",
                }}
              >
                <img
                  src="../../public/nike_air_force_1_black.png"
                  style={{
                    width: "100%",
                    height: "100px",
                    alignSelf: "center",
                  }}
                />
                <p>옵션11</p>
              </div>

              <div
                style={{
                  display: "inline-block",
                  width: "100px",
                  margin: "5px 15px",
                }}
              >
                <img
                  src="../../public/nike_air_force_1_black.png"
                  style={{
                    width: "100%",
                    height: "100px",
                    alignSelf: "center",
                  }}
                />
                <p>옵션12</p>
              </div>

              <div
                style={{
                  display: "inline-block",
                  width: "100px",
                  margin: "5px 15px",
                }}
              >
                <img
                  src="../../public/nike_air_force_1_black.png"
                  style={{
                    width: "100%",
                    height: "100px",
                    alignSelf: "center",
                  }}
                />
                <p>옵션13</p>
              </div>

              <div
                style={{
                  display: "inline-block",
                  width: "100px",
                  margin: "5px 15px",
                }}
              >
                <img
                  src="../../public/nike_air_force_1_black.png"
                  style={{
                    width: "100%",
                    height: "100px",
                    alignSelf: "center",
                  }}
                />
                <p>옵션14</p>
              </div>

              <div
                style={{
                  display: "inline-block",
                  width: "100px",
                  margin: "5px 15px",
                }}
              >
                <img
                  src="../../public/nike_air_force_1_black.png"
                  style={{
                    width: "100%",
                    height: "100px",
                    alignSelf: "center",
                  }}
                />
                <p>옵션15</p>
              </div>
            </div>
          </div>
          <div>
            <button onClick={() => setCoordinate("0px")}>1</button>
            <button onClick={() => setCoordinate("-1172px")}>2</button>
            {/* <button onClick={() => setCoordinate("-1040px")}>3</button> */}
          </div>
        </div>
      </div>
      <br />

      <div
        style={{
          display: "flex",
          margin: "0 65px",
          padding: "0 40px",
        }}
      >
        {/* <div
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
        </div> */}
        <div
          style={{
            marginRight: "5px",
            width: "15%",
            height: "80vh",
          }}
        >
          <div class="border-b border-gray-200 px-4 py-4">
            <h3 class="-mx-2 -my-3 flow-root">
              <button
                type="button"
                class="flex w-full items-center justify-between bg-white px-2 text-gray-400 hover:text-gray-500"
                aria-controls="filter-section-mobile-0"
                aria-expanded="false"
                onClick={() => setCategory(!category)}
              >
                <span class="font-medium text-gray-900">카테고리</span>
                <span class="ml-6 flex items-center">
                  {category ? (
                    <svg
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                  )}
                </span>
              </button>
            </h3>
            {category ? (
              <div class="pt-3" id="filter-section-mobile-0">
                <div class="space-y-3">
                  <div class="flex items-center">
                    <input
                      id="shoes"
                      name="color[]"
                      value="white"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                    />
                    <label
                      for="filter-mobile-color-0"
                      class="ml-3 min-w-0 flex-1 text-gray-500"
                    >
                      신발
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      id="clothes"
                      name="color[]"
                      value="beige"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                    />
                    <label
                      for="filter-mobile-color-1"
                      class="ml-3 min-w-0 flex-1 text-gray-500"
                    >
                      의류
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      id="goods"
                      name="color[]"
                      value="blue"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                    />
                    <label
                      for="filter-mobile-color-2"
                      class="ml-3 min-w-0 flex-1 text-gray-500"
                    >
                      잡화
                    </label>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div class="border-b border-gray-200 px-4 py-4">
            <h3 class="-mx-2 -my-3 flow-root">
              <button
                type="button"
                class="flex w-full items-center justify-between bg-white px-2 text-gray-400 hover:text-gray-500"
                aria-controls="filter-section-mobile-0"
                aria-expanded="false"
                onClick={() => setBrand(!brand)}
              >
                <span class="font-medium text-gray-900">브랜드</span>
                <span class="ml-6 flex items-center">
                  {brand ? (
                    <svg
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                  )}
                </span>
              </button>
            </h3>
            {brand ? (
              <div class="pt-3" id="filter-section-mobile-0">
                <div class="space-y-3">
                  <div class="flex items-center">
                    <input
                      id="nike"
                      name="color[]"
                      value="white"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                    />
                    <label
                      for="filter-mobile-color-0"
                      class="ml-3 min-w-0 flex-1 text-gray-500"
                    >
                      나이키
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      id="adidas"
                      name="color[]"
                      value="beige"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                    />
                    <label
                      for="filter-mobile-color-1"
                      class="ml-3 min-w-0 flex-1 text-gray-500"
                    >
                      아디다스
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      id="apc"
                      name="color[]"
                      value="blue"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                    />
                    <label
                      for="filter-mobile-color-2"
                      class="ml-3 min-w-0 flex-1 text-gray-500"
                    >
                      A.P.C
                    </label>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
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
