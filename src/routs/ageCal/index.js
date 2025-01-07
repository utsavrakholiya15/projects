import React, { useState } from "react";
import "./ageCal.scss";
import arrowIcon from "./icons8-down-arrow-50.png";
export default function AgeCal() {
  const [selectedMonthName, setselectedMonthName] = useState();
  const [selectedMonth, setselectedMonth] = useState();
  const [selectedDate, setselectedDate] = useState();
  const [selectedYear, setselectedYear] = useState();
  const [outputShow, setOutputShow] = useState(false);
  const [output, setOutput] = useState({});
  const [showError, setShowError] = useState(false);
  let months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  //
  let maxDate = 31;
  if (selectedMonth == 2 && selectedYear % 4 == 0) {
    maxDate = 29;
  } else if (selectedMonth == 2) {
    maxDate = 28;
  } else if (
    selectedMonth == 2 ||
    selectedMonth == 4 ||
    selectedMonth == 6 ||
    selectedMonth == 9 ||
    selectedMonth == 11
  ) {
    maxDate = 30;
  } else {
    maxDate = 31;
  }
  let dates = [];
  for (let i = 1; i <= maxDate; i++) {
    dates.push(i);
  }
  //
  //
  let years = [];
  for (let i = 2025; i >= 1950; i--) {
    years.push(i);
  }
  //
  //
  const inputDate = `${selectedYear}-${selectedMonth}-${selectedDate}`;
  //   console.log(selectedMonthName);
  //   console.log(selectedMonth);
  //   console.log(selectedDate);
  //   console.log(selectedYear);
  function getDateDifference(inputDate) {
    const today = new Date();
    const birthDate = new Date(inputDate);

    if (isNaN(birthDate)) {
      setShowError(true);
      return false;
    }
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    // Adjust for negative months and dates
    if (days < 0) {
      months -= 1;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }
    if(years<0){
      setShowError(true);
      return false;
    }
    const result = {
      Date: days,
      Month: months,
      Year: years,
    };
    return result;
  }
  const handleOnSubmit = () => {
    const difference = getDateDifference(inputDate);
    console.log(difference);
    if (!difference) {
      setShowError(true);
    } else {
      setOutput(difference);
      setOutputShow(true);
    }
  };
  return (
    <div className="ac">
      <div className="container">
        <div className="ac-title">
          <h2>Age Calculator</h2>
        </div>
        <div className="ac-inputs">
          <select
            value={selectedMonthName}
            onChange={(ev) => {
              setselectedMonthName(ev.target.value);
              setselectedMonth(ev.target.selectedIndex);
            }}
          >
            <option>MM</option>
            {months.map((el, i) => {
              return <option key={i + 1}>{el}</option>;
            })}
          </select>
          <select
            value={selectedDate}
            onChange={(ev) => setselectedDate(ev.target.value)}
          >
            <option>DD</option>
            {dates.map((el, i) => {
              return <option key={i}>{el}</option>;
            })}
          </select>
          <select
            value={selectedYear}
            onChange={(ev) => setselectedYear(ev.target.value)}
          >
            <option>YY</option>
            {years.map((el, i) => {
              return <option key={i}>{el}</option>;
            })}
          </select>
        </div>
        <div className="btn-div">
          <button className="date-btn" onClick={handleOnSubmit}>
            <img className="img-full" src={arrowIcon} />
          </button>
          <div className="date-line"></div>
        </div>
        {outputShow ? (
          <div className="ac-output">
            <h3>
              <span>{output.Year}</span> Years
            </h3>
            <h3>
              <span>{output.Month}</span> Months
            </h3>
            <h3>
              <span>{output.Date}</span> Days
            </h3>
          </div>
        ) : showError ? (
          <p className="ac-error">Please enter valid date</p>
        ) : (
          null
        )}
      </div>
    </div>
  );
}
