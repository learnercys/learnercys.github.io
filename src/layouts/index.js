import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import styles from './index.module.css'

const Header = () => (
    <div className={styles.header}>
        <div className={styles.box}>
            <h1>
                <Link
                to="/">
                Carlos <strong>Hernandez</strong>
                </Link>
            </h1>
            <p>Software Engineer</p>
        </div>
    </div>
)

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet
            title="learnercys.github.io"
            meta={[
            { name: 'description', content: 'learnercys.github.io' },
            { name: 'keywords', content: 'learnercys' },
            ]}
        />
        <Header />
        <div className={styles.container}>{children()}</div>
    </div>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func,
}

export default TemplateWrapper
