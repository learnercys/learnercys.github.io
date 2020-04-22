import React, { Component } from 'react';
import Link from 'gatsby-link'

import styles from './contact.module.css'

class Contact extends Component {
    render() {
        return (
            <div className={styles.contact}>
                <h3>Pages</h3>
                <ul>
                    <li><i className="fa fa-home"></i> <Link to="/">Home</Link></li>
                    <li><i className="fa fa-check"></i> <Link to="/resume">Resume</Link></li>
                </ul>
                <h3>Contact</h3>
                <ul>
                    <li><i className="fa fa-envelope-o"></i> <a target="_blank" href="mailto:learnercys@gmail.com">learnercys@gmail.com</a></li>
                    <li><i className="fa fa-linkedin-square"></i> <a target="_blank" href="https://www.linkedin.com/in/carlos-hernandez-1571b187/">linkedin</a></li>
                </ul>
            </div>
        );
    }
}

export default Contact;
