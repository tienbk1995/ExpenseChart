import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import "./ExpenseDisplay.css";

const ExpenseDisplay = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("");

  const handleOnYearChange = (year) => setFilteredYear(year);

  const filterYearRender = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  console.log(filterYearRender);
  return (
    <div>
      <Card className="expenses-display">
        <ExpenseFilter onFilter={handleOnYearChange} />
        <ExpenseChart expenses={filterYearRender} />
        <ExpenseList items={filterYearRender} />
      </Card>
    </div>
  );
};

export default ExpenseDisplay;
