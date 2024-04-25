import "./SizeTable.css";

const SizeTable = () => {
  const sizeKr = [
    "KR",
    225,
    230,
    235,
    235,
    240,
    240,
    245,
    250,
    255,
    260,
    265,
    270,
    275,
    280,
    285,
    290,
    295,
    300,
  ];
  const sizeUsM = [
    "US (M)",
    3.5,
    4,
    4.5,
    5,
    5.5,
    6,
    6.5,
    7,
    7.5,
    8,
    8.5,
    9,
    9.5,
    10,
    10.5,
    11,
    11.5,
    12,
  ];
  const sizeUsW = [
    "US (W)",
    5,
    5.5,
    6,
    6.5,
    7,
    7.5,
    8,
    8.5,
    9,
    9.5,
    10,
    10.5,
    11,
    11.5,
    12,
    12.5,
    13,
    13.5,
  ];
  const sizeUk = [
    "UK",
    3,
    3.5,
    4,
    4.5,
    5,
    5.5,
    6,
    6,
    6.5,
    7,
    7.5,
    8,
    8.5,
    9,
    9.5,
    10,
    10.5,
    11,
  ];
  const sizeJp = [
    "JP",
    22.5,
    23,
    23.5,
    23.5,
    24,
    24,
    24.5,
    25,
    25.5,
    26,
    26.5,
    27,
    27.5,
    28,
    28.5,
    29,
    29.5,
    30,
  ];
  const sizeEu = [
    "EU",
    35.5,
    36,
    36.5,
    37.5,
    38,
    38.5,
    39,
    40,
    40.5,
    41,
    42,
    42.5,
    43,
    44,
    44.5,
    45,
    45.5,
    46,
  ];
  const sizes = [sizeUsM, sizeUsW, sizeUk, sizeJp, sizeEu];

  return (
    <>
      <p
        style={{
          marginTop: "40px",
          marginBottom: "-40px",
          fontSize: "1.5rem",
          fontWeight: "800",
        }}
      >
        사이즈 정보
      </p>
      <table
        style={{
          width: "100%",
          margin: "50px auto",
          textAlign: "center",
          fontSize: "0.9rem",
        }}
      >
        <thead>
          {sizeKr.map((el, i) => (
            <th
              key={i}
              style={{
                padding: "10px 20px",
                border: "1px solid rgb(199, 197, 197)",
                backgroundColor: "rgb(246, 246, 246)",
              }}
            >
              {el}
            </th>
          ))}
        </thead>
        <tbody>
          {sizes.map((arr, i) => (
            <tr key={i}>
              {arr.map((el, j) => (
                <td
                  className="size-table-cell"
                  key={j}
                  style={{
                    padding: "10px 20px",
                    border: "1px solid rgb(199, 197, 197)",
                  }}
                >
                  {el}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SizeTable;
