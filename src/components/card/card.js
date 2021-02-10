import React from "react"
import { Card } from "antd"

import CardHeader from "./card-header"

import styles from "./card.module.sass"

const TriCard = ({ title, children, index }) => {
	const setColor = i => {
		switch (i) {
			default:
				return ""

			case 1:
				return "rgba(245, 34, 45, 0.25)"

			case 2:
				return "rgba(212, 102, 45, 0.25)"

			case 3:
				return "rgba(82, 196, 26, 0.25)"

			case 4:
				return "rgba(193, 185, 185, 0.25)"
		}
	}

	return (
		<Card
			title={<CardHeader titulo={title} className={styles.header} />}
			headStyle={{ padding: "0 1rem", backgroundColor: setColor(index) }}
			bordered={false}
			className={styles.card}>
			{children}
		</Card>
	)
}

export default TriCard
