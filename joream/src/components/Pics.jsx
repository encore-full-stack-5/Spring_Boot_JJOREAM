import "./Pics.css";

const Pics = () => {
  const picsPath = [
    "../public/shoes.png",
    "../public/shoes.png",
    "../public/shoes.png",
    "../public/shoes.png",
    "../public/shoes.png",
    "../public/shoes.png",
    "../public/shoes.png",
    "../public/shoes.png",
    "../public/shoes.png",
    "../public/shoes.png",
    "../public/shoes.png",
    "../public/shoes.png",
    "../public/shoes.png",
    "../public/shoes.png",
  ];

  return (
    <div className="pics-container">
      <div className="main-pics">
        <img src="../public/shoes.jpg" alt="shoes" width="560" height="560" />
      </div>
      <div className="sub-pics">
        {picsPath.map((path, index) => (
          <img key={index} src={path} alt="shoes" width="62.8" height="62.8" />
        ))}
      </div>
    </div>
  );
};

export default Pics;
