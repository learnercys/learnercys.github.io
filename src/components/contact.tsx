import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import * as styles from './contact.module.scss'

class Contact extends Component {
    render() {
        return (
            <div className={styles.contact}>
                <h3 className={"text-2xl mb-6"}>Contact</h3>
                <ul>
                    <li><FontAwesomeIcon icon={regular('envelope')} /> <a target="_blank" href="mailto:xyc.hernandez@gmail.com">xyc.hernandez@gmail.com</a></li>
                    <li><FontAwesomeIcon icon={brands('linkedin')} /> <a target="_blank" href="https://www.linkedin.com/in/carlos-hernandez-1571b187/">linkedin</a></li>
                </ul>
            </div>
        );
    }
}

export default Contact;
