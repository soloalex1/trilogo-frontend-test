import React from "react"
import { PageHeader } from "antd"
import styles from "./header.module.sass"

const Header = ({ logo }) => {
	return <PageHeader backIcon={false} title={<img src={logo} alt="Trílogo" />} className={styles.header} />
}

export default Header
