import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterTitle, setTitle] = useState("");
  const [enterAmount, setAmount] = useState("");
  const [enterDate, setDate] = useState("");

  const [otherFormState, changeFormState] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDatechange = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enterTitle,
      amount: +enterAmount,
      date: new Date(enterDate),
    };
    console.log(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
    changeFormState(true);
    props.onSaveExpenseData(expenseData);
  };

  const addExpenseHandler = (e) => {
    e.preventDefault();
    changeFormState(false);
  };

  return otherFormState ? (
    <div className="new-expense__add">
      <button type="submit" onClick={addExpenseHandler}>
        Add New Expense
      </button>
    </div>
  ) : (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={handleTitleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterAmount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-1-1"
            max="2022-12-31"
            value={enterDate}
            onChange={handleDatechange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
        <button type="button" onClick={() => changeFormState(true)}>
          Cancel
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
