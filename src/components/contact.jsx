import React, { Component } from 'react';
import styles from './contact.module.css'

class Contact extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h3>Contact</h3>
                <ul>
                    <li><a href="mailto:learnercys@gmail.com">learnercys@gmail.com</a></li>
                    <li><a href="https://github.com/learnercys">github</a></li>
                    <li><a href="https://twitter.com/learnercys">twitter</a></li>
                    <li><a href="https://www.linkedin.com/in/carlos-hernandez-1571b187/">linkedin</a></li>
                </ul>
            </div>
        );
    }
}

export default Contact;
