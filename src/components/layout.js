import  React from "react"
import styles from "./layout.module.scss"
import Header from "./header"
import Footer from "./footer"

export default ({children}) => (
    <div className={styles.container}>
        <Header/>

        <div>
            {children}
        </div>
        <Footer> Footer component</Footer>
    </div>
)