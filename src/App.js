import logo from "./logo.svg"

import { Row, Col } from "antd"
import Header from "./components/header/header"
import TriCard from "./components/card/card"

import styles from "./app.module.sass"

function App() {
	return (
		<div className={styles.body}>
			<Header logo={logo} />
			<Row justify="center" align="middle" gutter={16}>
				<Col span={5}>
					<TriCard title="Aberto" />
				</Col>
				<Col span={5}>
					<TriCard title="Aberto" />
				</Col>
				<Col span={5}>
					<TriCard title="Aberto" />
				</Col>
				<Col span={5}>
					<TriCard title="Aberto" />
				</Col>
			</Row>
		</div>
	)
}

export default App
