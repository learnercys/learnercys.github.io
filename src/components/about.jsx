import React, { Component } from 'react'
import styles from './about.module.css'

class General extends Component {
    render() {
        const experiences = [
            {
                year: '2015-present',
                company: 'Paypal',
                city: 'Guatemala city',
                title: 'Software Engineer',
                description: `Paypal is a company operating a worldwide online payments system that supports
                    online money transfers and serves as an electronic alternative to traditional
                    paper methods. As a Software Engineer working for Paypal I develop projects based
                    in RESTful services using NodeJS as main technology that are required to:`,
                tasks: [
                    'Handle accounts and pay bills from the U.S. to multiples countries.',
                    'Allow users to send money to multiples countries.'
                ]

            }, {
                year: '2014-2015',
                company: 'Kipo Business',
                city: 'Guatemala city',
                title: 'Frontend Developer',
                description: `Kipo Business is a platform designed to manage and monitor activities in real
                    time for your employees that work out of the o ice. As a Frontend Developer I manage and
                    schedule the development tasks, create the architecture and define the technologies to be used.`,
                tasks: [
                    'Develop solutions for real time geolocation',
                    'Build solutions to Data-Driven Documents based on D3js',
                    'Integration with APIs based on RESTful Services.'
                ]
            }
        ];

        return (
            <div>
                <div>
                    <h4>Experience</h4>
                    {experiences.map(experience => {
                        return (
                            <div className={styles.section}>
                                <div>{experience.year}</div>
                                <div>
                                    <p>
                                        <strong>{experience.company}</strong>
                                        <span className={styles.city}>{experience.city}</span>
                                    </p>
                                    <p className={styles.title}>{experience.title}</p>
                                    <p>{experience.description}</p>
                                    {this.renderTasks(experience)}
                                </div>
                            </div>
                        );
                    })}

                    <h4>Education</h4>
                    <div className={styles.section}>
                        <div>2011-2016</div>
                        <div>
                            <p>
                                <strong>Science and Systems Engineering</strong>
                                <span className={styles.university}>Universidad de San Carlos de Guatemala.</span>
                            </p>
                        </div>
                    </div>

                    <h4>Volunter</h4>
                    <div className={styles.section}>
                        <div>2017-present</div>
                        <div>
                            <p>
                                <strong>NodeSchool</strong>
                                <span className={styles.city}>Guatemala city</span>
                            </p>
                            <p>
                                NodeSchool is a worldwide open source project run by volunteers with two goals: Create
                                high quality programming and to host community learning events. As a NodeSchool Mentor
                                I help from beginners to experts to learn about web technologies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderTasks(experience) {
        if (experience.tasks) {
            return (
                <ul>
                    {experience.tasks.map(task => {
                        return (
                            <li>{task}</li>
                        );
                    })}
                </ul>
            );
        }
    }
}

export default General;
