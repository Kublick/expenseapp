import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem({ expenseTitle, expenseAmount, expenseDate }) {
	return (
		<Card className="expense-item">
			<ExpenseDate expenseDate={expenseDate} />
			<div className="expense-item__description">
				<h2>{expenseTitle}</h2>
			</div>
			<div className="expense-item__price"> {expenseAmount}</div>
		</Card>
	);
}

export default ExpenseItem;
