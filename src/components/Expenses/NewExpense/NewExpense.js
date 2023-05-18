import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const SaveData = (enteredData) => {
    const Data = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(Data);
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const StopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveData={SaveData}
          onCancel={StopEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};
export default NewExpense;
