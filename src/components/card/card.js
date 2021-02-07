import React from "react"
import { Card } from "antd"

import CardHeader from "./card-header"

import styles from "./card.module.sass"

const TriCard = ({ title, children }) => {
	return (
		<Card title={<CardHeader titulo={title} className={styles.header} />} bordered={false} className={styles.card}>
			{children}
		</Card>
	)
}

export default TriCard
