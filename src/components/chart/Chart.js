import React from "react";
import ChartBar from "./ChartBar";
import "./Charts.css";

const Chart = (props) => {
	const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
	const totalMaximum = Math.max(...dataPointsValues);

	return (
		<div
			className="chart"
			style={{
				padding: "1rem",
				borderRadius: "12px",
				backgroundColor: "#f8dfff",
				textAlign: "center",
				display: "flex",
				justifyContent: "space-around",
				height: "10rem",
			}}
		>
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaximum}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
