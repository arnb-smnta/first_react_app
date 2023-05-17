import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const SaveData = (enteredData) => {
    const Data = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(Data);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={SaveData}></ExpenseForm>
    </div>
  );
};
export default NewExpense;
