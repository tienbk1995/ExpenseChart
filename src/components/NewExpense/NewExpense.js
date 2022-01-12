import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const handleExpenseDataFormNewExpense = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random(),
    };
    // console.log(newExpenseData);
    props.onSaveExpenseDataApp(newExpenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={handleExpenseDataFormNewExpense} />
    </div>
  );
};
export default NewExpense;
