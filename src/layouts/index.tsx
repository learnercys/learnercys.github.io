import React from 'react'
import { Link } from "gatsby"
import Contact from '../components/contact'

import * as styles from './index.module.scss';

const Header = () => (
    <div className={styles.header}>
        <div className={styles.box}>
            <h1 className={"text-4xl"}>
                <Link
                to="/">
                Carlos <strong>Hernandez</strong>
                </Link>
            </h1>
            <p>Software Engineer / Software Architect / Consultant</p>
        </div>
    </div>
)

type LayoutProps = {
  children: React.ReactElement,
};

export default function Layout({children}: LayoutProps) {
  return (
    <div>
      {/*<Helmet
            title="learnercys.github.io"
            meta={[
            { name: 'description', content: 'learnercys.github.io' },
            { name: 'keywords', content: 'learnercys' },
            ]}
        />*/}
      <Header />
      <div className={styles.container}>
        <Contact/>
        {children}
      </div>
    </div>
  )
}

