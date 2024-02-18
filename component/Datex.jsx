import React, { useState, useEffect } from "react";
import "../src/app.css";
import "../src/styles/date.css";

const Datex = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  // Format the date as a string in the specified format
  let dateString = date.toLocaleString("en-US", {
    month: "short", // "Feb"
    day: "2-digit", // "18"
    year: "numeric", // "2024"
    hour: "2-digit", // "08"
    minute: "2-digit", // "10"
    hour12: true, // use 12-hour format
  });

  return (
    <div className="date_class">
      <h4 style={{ color: "white" }}>{dateString}</h4>
    </div>
  );
};

export default Datex;
