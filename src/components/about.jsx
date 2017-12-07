import React, { Component } from 'react'
import styles from './about.module.css'

class General extends Component {
    render() {
        return (
            <div>
                <div>
                    <h4>Experience</h4>
                    <div className={styles.experience}>
                        <div>2015-present</div>
                        <div>
                            <p><strong>Paypal</strong><span className={styles.city}>Guatemala city</span></p>
                            <p>Software Engineer</p>
                            <p>
                                Paypal is a company operating a worldwide online payments system that supports 
                                online money transfers and serves as an electronic alternative to traditional 
                                paper methods. As a Software Engineer working for Paypal I develop projects based 
                                in RESTful services using NodeJS as main technology that are required to:
                            </p>
                            <ul>
                                <li>Handle accounts and pay bills from the U.S. to multiples countries.</li>
                                <li>Allow users to send money to multiples countries.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default General;