import React from "react";
import "./ExpenseDate.css";
const ExpenseDate = ({ date }) => {
  const dateIn = date.toLocaleDateString("en-US", { day: "2-digit" });
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__day">{dateIn}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};
export default ExpenseDate;
