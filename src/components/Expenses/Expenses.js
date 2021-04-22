import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("2021");

	const filteredChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	return (
		<>
			<Card className="expenses">
				<ExpensesFilter
					onChangeFilter={filteredChangeHandler}
					selected={filteredYear}
				/>
				{props.items.map((expense) => (
					<ExpenseItem
						key={expense.id}
						expenseTitle={expense.title}
						expenseAmount={expense.amount}
						expenseDate={expense.date}
					/>
				))}
			</Card>
		</>
	);
}

export default Expenses;
