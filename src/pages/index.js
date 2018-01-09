import React from 'react'
import styles from './index.module.css'
import Contact from '../components/contact'
import Posts from '../components/posts'

const IndexPage = () => (
    <div className={styles.container}>
        <Contact/>
        <Posts/>
    </div>
)

export default IndexPage