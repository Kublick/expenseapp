import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
	if (props.item.length === 0)
		return <h2 className="expenses-list__fallback">No Expenses Found</h2>;

	return (
		<>
			<ul className="expenses-list">
				{props.item.map((expense) => (
					<ExpenseItem
						key={expense.id}
						expenseTitle={expense.title}
						expenseAmount={expense.amount}
						expenseDate={expense.date}
					/>
				))}
			</ul>
		</>
	);
};

export default ExpensesList;
