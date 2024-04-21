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
        <img
          className="main-img"
          src="../public/shoes.jpg"
          alt="shoes"
          height="560"
        />
      </div>
      <div className="sub-pics">
        {picsPath.map((path, index) => (
          <img
            className="sub-img"
            key={index}
            src={path}
            alt="shoes"
            height="76.5"
          />
        ))}
      </div>
    </div>
  );
};

export default Pics;
