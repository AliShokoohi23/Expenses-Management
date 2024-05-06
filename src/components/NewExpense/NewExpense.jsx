import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {

    const [isEditting, setIsEditting] = useState(false);

    let id = 1;
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData ={
            ...enteredExpenseData,
            id: id
        }
        id += 1;    
        props.onAddExpense(expenseData);
        setIsEditting(false);
    }
    const startEdittingHandler = () =>{
        setIsEditting(true);
    }
    const stopEdittingHandler = () =>{
        setIsEditting(false);
    }
    return (<div className="new-expense">
        {!isEditting && <button onClick={startEdittingHandler}>Add New Expense</button>}
        {isEditting && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={stopEdittingHandler} />}
        </div>
    );
}
export default NewExpense;