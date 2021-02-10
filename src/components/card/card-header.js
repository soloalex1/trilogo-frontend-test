import React from "react"

const CardHeader = ({ titulo, className }) => {
	return (
		<div className={className}>
			<h2 style={{ fontSize: ".8rem", fontWeight: "bold" }}>{titulo}</h2>
		</div>
	)
}

export default CardHeader
