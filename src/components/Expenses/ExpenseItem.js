import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const onClickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <Card className="expense-item__date">
        <ExpenseDate date={props.date}></ExpenseDate>
      </Card>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">Rs{props.amount}</div>
      <button onClick={onClickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
