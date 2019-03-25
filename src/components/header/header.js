import React from "react"
import {Link,StaticQuery,graphql} from "gatsby"
import styles from "./header.module.scss"

// HeaderLink component
const HeaderLink =props => (
    <Link  to={props.to}>{props.text}</Link>
)
export default () => (

    <StaticQuery
        query = {graphql `
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
  `}
        render={data=>(
            <header className={styles.container}>
                <h1>{data.site.siteMetadata.title}</h1>
                <h2>Header component</h2>
                <div className={styles.row}>
                    <HeaderLink to="/" text='My blog'/>
                </div>
                <div className={styles.row}>
                    <HeaderLink to="/about" text='About'/>
                </div>
            </header>

        )}
    />

)