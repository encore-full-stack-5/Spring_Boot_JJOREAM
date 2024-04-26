import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { useEffect, useState } from "react";
import Search from "./Search";
import { categoryProducts, getAllProducts } from "../api/productList";
import { useRecoilState } from "recoil";
import { ProductListState } from "../store/product";
import ProductSelect from "../components/ProductSelect";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  let navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState("");
  let [data, setData] = useRecoilState(ProductListState);
  const [isLoading, setIsLoading] = useState(true);
  const [proDetail, setProDetail] = useState(false);
  const [id, setId] = useState(0);

  const handleProductClick = (productId) => {
    navigate(`/detail/${productId}`);
  };

  const [selectedCategories, setSelectedCategories] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      let data = [];
      if (selectedCategories.length > 0) {
        for (const category of selectedCategories) {
          const response = await categoryProducts(category);
          data = data.concat(response.data);
        }
      } else {
        const response = await getAllProducts();
        data = response.data;
      }
      const moreInfo = data.map((el) => ({
        ...el,
      }));
      setData(moreInfo);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== value)
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedCategories]);

  return (
    <>
      <div
        style={{
          width: "100%",
          paddingTop: "20px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex", // Flex 컨테이너로 설정
            justifyContent: "center", // 수평 중앙 정렬
            margin: "0 auto",
            width: "100%",
            // height: "180px",
            backgroundColor: "white",
            paddingLeft: "40px",
            paddingRight: "40px",
          }}
        >
          <div
            style={{
              margin: "0 65px",
              // padding: "0 10px",
              padding: "10px",
              backgroundColor: "whitesmoke",
              width: "100%",
              borderBottom: "1px solid darkgray",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                id="ddd"
                style={{
                  display: "flex",
                  transition: "transform 0.5s ease-in-out", // 모션 효과 추가
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    width: "100px",
                    margin: "5px 15px",
                  }}
                  onClick={() => {
                    setShowModal(true);
                    setBrand("에어포스");
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
                  <p>에어포스</p>
                </div>

                <div
                  style={{
                    display: "inline-block",
                    width: "100px",
                    margin: "5px 15px",
                  }}
                  onClick={() => {
                    setShowModal(true);
                    setBrand("나이키");
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
                  <p>나이키</p>
                </div>

                <div
                  style={{
                    display: "inline-block",
                    width: "100px",
                    margin: "5px 15px",
                  }}
                  onClick={() => {
                    setShowModal(true);
                    setBrand("아디다스");
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
                  <p>아디다스</p>
                </div>

                <div
                  style={{
                    display: "inline-block",
                    width: "100px",
                    margin: "5px 15px",
                  }}
                  onClick={() => {
                    setShowModal(true);
                    setBrand("스투시");
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
                  <p>스투시</p>
                </div>
              </div>
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
          <div
            style={{
              marginRight: "5px",
              width: "15%",
              height: "100%",
            }}
          >
            <div className="border-b border-gray-200">
              <h6 className="-mx-2 -my-3 flow-root">
                <button
                  type="button"
                  className="px-2"
                  aria-controls="filter-section-mobile-0"
                  aria-expanded="false"
                  onClick={() => setCategory(!category)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    borderRadius: "0px",
                  }}
                >
                  <span className="font-medium text-gray-900">카테고리</span>
                  <span
                    className="ml-6 flex items-center"
                    style={{ width: "20px" }}
                  >
                    {category ? (
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                      </svg>
                    )}
                  </span>
                </button>
              </h6>
              {category ? (
                <div className="m-2" id="filter-section-mobile-0">
                  <div className="space-y-3">
                    <div className="flex items-center my-1">
                      <input
                        id="shoes"
                        name="category"
                        value="신발"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                        onChange={handleCheckboxChange}
                      />
                      <label
                        htmlFor="shoes"
                        style={{
                          marginLeft: "5px",
                        }}
                      >
                        신발
                      </label>
                    </div>
                    <div className="flex items-center my-1">
                      <input
                        id="clothes"
                        name="category"
                        value="의류"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                        onChange={handleCheckboxChange}
                      />
                      <label
                        htmlFor="clothes"
                        style={{
                          marginLeft: "5px",
                        }}
                      >
                        의류
                      </label>
                    </div>
                    <div className="flex items-center my-1">
                      <input
                        id="goods"
                        name="category"
                        value="잡화"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                        onChange={handleCheckboxChange}
                      />
                      <label
                        htmlFor="goods"
                        style={{
                          marginLeft: "5px",
                        }}
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
          </div>

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
                  onClick={() => handleProductClick(el.productId)}
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
      </div>
      {showModal && (
        <Search
          showModal={showModal}
          setShowModal={setShowModal}
          searchWord={brand}
        />
      )}
    </>
  );
};

export default ProductList;
