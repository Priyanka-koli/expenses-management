import React, { useState } from "react";
import { TextField } from "@mui/material";

const YearlyReport = () => {
  const [enterdNumber, setEnteredNumber] = useState({});
  const [rgbColor, setRgbColor] = useState({});
  const monthsArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const rgbCalculator = (enterNumber, pos) => {
    /* const red = Math.floor(enterNumber / (256 * 256));
    const green = Math.floor(enterNumber / 256) % 256;
    const blue = enterNumber % 256; */
    const hexNum = `#${Number(enterNumber).toString(16).padEnd(2, 0)}`;
    console.log(hexNum);
    const hexNumber =
      "#" +
      hexNum
        .slice(hexNum.startsWith("#") ? 1 : 0)
        .split("")
        .map((x) => x + x)
        .join("");
    console.log(hexNumber);
    setRgbColor({
      ...rgbColor,
      [pos]: enterNumber < 9007 ? hexNumber : hexNum,
    });
  };

  const fieldChangeHanlder = (e) => {
    setEnteredNumber({ ...enterdNumber, [e.target.name]: e.target.value });
    rgbCalculator(e.target.value, e.target.name);
  };

  return (
    <div>
      {monthsArr.map((ele, i) => (
        <TextField
          name={String(i)}
          sx={{ backgroundColor: rgbColor[i] }}
          value={enterdNumber[i]}
          onChange={fieldChangeHanlder}
        ></TextField>
      ))}
    </div>
  );
};

export default YearlyReport;
