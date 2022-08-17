import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCloseButton={stopEditingHandler}
        />
      )}

      {/* or use ternary operator - result the same as above */}
      {/* {isEditing ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      ) : (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )} */}
    </div>
  );
};

export default NewExpense;
