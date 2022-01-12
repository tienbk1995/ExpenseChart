import React, { Fragment, useState } from "react";
import ExpenseDisplay from "./components/Expenses/ExpenseDisplay";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const handleExpenseDataFormApp = (expenseUpdated) => {
    setExpenses((prevExpense) => {
      return [expenseUpdated, ...prevExpense];
    });
  };

  return (
    <Fragment>
      <div>
        <p>Let get started</p>
        <div>
          <NewExpense onSaveExpenseDataApp={handleExpenseDataFormApp} />
          <ExpenseDisplay expenses={expenses} />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
