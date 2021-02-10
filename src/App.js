import logo from "./logo.svg"

import { Row, Col, Layout } from "antd"
import Header from "./components/header/header"
import TriCard from "./components/card/card"

import styles from "./app.module.sass"

function App() {
	return (
		<div className={styles.body}>
			<Header logo={logo} />
			<Layout.Content className={styles.mainContainer}>
				<Row justify="center" align="middle" gutter={16}>
					<Col span={5}>
						<TriCard title="Abertos" index={1} />
					</Col>
					<Col span={5}>
						<TriCard title="Executados" index={2} />
					</Col>
					<Col span={5}>
						<TriCard title="Vistoriados" index={3} />
					</Col>
					<Col span={5}>
						<TriCard title="Arquivados" index={4} />
					</Col>
				</Row>
			</Layout.Content>
		</div>
	)
}

export default App
