import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("2021");
	const filteredChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredItems = props.items.filter(
		(item) => item.date.getFullYear() === Number(filteredYear)
	);

	return (
		<>
			<li>
				<Card className="expenses">
					<ExpensesFilter
						onChangeFilter={filteredChangeHandler}
						selected={filteredYear}
					/>
					<ExpensesChart expenses={filteredItems} />
					<ExpensesList item={filteredItems} />
				</Card>
			</li>
		</>
	);
}

export default Expenses;
