import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import ArticleList from '../components/article/article-list'

export default () => (
    <Layout>
        <h1>It is home page</h1>
        <Link to ="/">Home</Link> | <Link to ="/about">About</Link>
        <ArticleList />
    </Layout>
)
