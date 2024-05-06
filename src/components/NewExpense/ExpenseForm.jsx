import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const setTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const setAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const setDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault(); //prevent reloading of the page after submitting form
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={setTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="Number"
            value={enteredAmount}
            onChange={setAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-31"
            max="2022-12-31"
            onChange={setDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
