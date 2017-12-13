import React, { Component } from 'react'
import styles from './about.module.css'

class General extends Component {
    render() {
        const experiences = [
            {
                time: '2015',
                header: 'Paypal',
                place: 'Guatemala city',
                title: 'Software Engineer',
                description: `Paypal is a company operating a worldwide online payments system that supports
                    online money transfers and serves as an electronic alternative to traditional
                    paper methods. As a Software Engineer working for Paypal I develop RESTful APIs using
                    NodeJS as main technology that are required to:`,
                tasks: [
                    'Handle accounts and pay bills from the U.S. to multiples countries.',
                    'Allow users to send money to multiples countries.'
                ]
            }, {
                time: '2014-2015',
                header: 'Kipo Business',
                place: 'Guatemala city',
                title: 'Frontend Developer',
                description: `Kipo Business is a platform designed to manage and monitor activities in real
                    time for your employees that work out of the office. As a Frontend Developer I managed and
                    scheduled the development tasks, designed its components and defined the technologies to be used.`,
                tasks: [
                    'Develop solutions for real time geolocation',
                    'Build solutions to Data-Driven Documents based',
                    'Integration with APIs'
                ]
            }
        ];

        const experience = {
            header: 'Experience',
            achievements: experiences,
        };


        const education = {
            header: 'Education',
            achievements: [
                {
                    time: '2011-2016',
                    header: 'Science and Systems Engineering',
                    place: 'Universidad de San Carlos de Guatemala',
                }
            ],
        };

        const volunteer = {
            header: 'Volunteer',
            achievements: [
                {
                    time: '2017',
                    header: 'NodeSchool',
                    place: 'Guatemala city',
                    title: 'Mentor',
                    description: `NodeSchool is a worldwide open source project run by volunteers with two goals: Create
                        high quality programming and to host community learning events. As a NodeSchool Mentor
                        I help from beginners to experts to learn about web technologies.`,

                }
            ],
        };

        const sections = [
            experience,
            education,
            volunteer,
        ];

        return (
            <div>
                {sections.map(section => {
                    return (
                        <section>
                            <h3>{section.header}</h3>
                            {section.achievements.map(achievement => {
                                return (
                                    <div className={styles.achievement}>
                                        <div>{achievement.time}</div>
                                        <div>
                                            <p>
                                                <strong>{achievement.header}</strong>
                                                <span className={styles.city}>{achievement.place}</span>
                                            </p>
                                            <p className={styles.title}>{achievement.title}</p>
                                            <p className={styles.description}>{achievement.description}</p>
                                            {this.renderTasks(achievement.tasks)}
                                        </div>
                                    </div>
                                );
                            })}
                        </section>
                    );
                })}
            </div>
        );
    }

    renderTasks(tasks) {
        if (tasks) {
            return (
                <ul>
                    {tasks.map(task => {
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
