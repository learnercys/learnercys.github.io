import React, { Component } from 'react';
import Link from 'gatsby-link'

import * as styles from './posts.module.scss'
class Posts extends Component {
    render() {
        return (
            <div className={styles.posts}>
                <h2>Posts</h2>
                <h4><Link to="/from-the-beginning">From the beginning</Link></h4>
            </div>
        )
    }
}

export default Posts;
