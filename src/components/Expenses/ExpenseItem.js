import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <Card className="expense-item__date">
        <ExpenseDate date={props.date}></ExpenseDate>
      </Card>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">Rs{props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
