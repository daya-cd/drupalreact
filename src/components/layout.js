import  React from "react"
import styles from "./layout.module.scss"
import Header from "./header/header"
import Footer from "./footer/footer"

export default ({children}) => (
    <div className={styles.container}>
        <Header/>

        <div className={styles.content}>
            {children}
        </div>
        <Footer> Footer component</Footer>
    </div>
)