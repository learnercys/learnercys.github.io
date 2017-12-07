import React from 'react'
import styles from './index.module.css'
import Contact from '../components/contact'
import About from '../components/about'

const IndexPage = () => (
    <div className={styles.container}>
        <Contact/>
        <About/>
    </div>
)

export default IndexPage
