import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem({ expenseTitle, expenseAmount, expenseDate }) {
	const [title, setTitle] = useState(expenseTitle);

	const clickHandler = () => {
		setTitle("New Title");
	};

	return (
		<Card className="expense-item">
			<ExpenseDate expenseDate={expenseDate} />
			<div className="expense-item__description">
				<h2>{title}</h2>
			</div>
			<div className="expense-item__price"> {expenseAmount}</div>
			<button onClick={clickHandler}>Change Title</button>
		</Card>
	);
}

export default ExpenseItem;
