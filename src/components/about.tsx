import React, { Component } from 'react'
import * as styles from './about.module.scss'


interface Achievements {
    time: string
    header: string
    place: string
    title?: string
    description?: string
    tasks?: string[]
}

interface Section {
    header: string
    achievements: Achievements[]
}

class General extends Component {
    render() {
        const experiences: Achievements[] = [
            {
                time: "2021",
                header: "Enflux",
                place: "Guatemala city",
                title: "Full Stack Software Engineer",
                description: `Enflux provides the most powerful decision support platform for higher education institutions.  We pull together
                all your siloed and static admission and assessment data—both internal and external—and curate them into insightful, actionable reports in real-time.
                As a Software Engineer my contributions and responsibilities are about building high valuable platforms for Academic Decision Support.`,
                tasks: [
                    "Technologies: Javascript/Typescript, Python and Golang. Frameworks: Nodejs, React, Flask and Gin. Infrastructure: AWS. " +
                    "Testing: Jest, Pytest and Golang testing. Databases: PostgreSQL and Redis.",
                ]
            },
            {
                time: '2018-2021',
                header: 'Sestra Group',
                place: 'Guatemala city',
                title: 'Consultant',
                description: `Sestra Group is a pharmaceutical and medical company that works promoting health
                            and seek with the highest standards to establish itself as a brand recognized throughout the world. Between my contributions
                            and responsibilities I can mention are: Contribute to define a high engineering level design for the company's vision.
                            Review solutions for billing and medical consulting; internal and external solutions.
                            Plan and monitor the execution of a platform for online requests and assistance.
                            Help for solutions regarding all the technical needs on the company.`,
                tasks: [
                    `Technologies: Javascript/Typescript, Python and Golang. Frameworks: Nodejs, React, Flask and gRCP.
                    Infrastructure: AWS. Testing: Jest, Pytest and Golang testing. Databases: PostgreSQL, MySQL and Redis.`,
                ]
            },{
                time: '2018-2020',
                header: 'Cognits',
                place: 'Guatemala city',
                title: 'Technical Lead',
                description: `Cognits provides Digital Expertise across the SaaS Marketplace for companies looking
                    to drive quality and scale in their professional services business. With subject matter experts
                    leading our core offerings and teams. The projects in which I have collaborated are:
                    Oriental bank and Promerica. In both projects I have helped to provide them solutions for:
                    A Web and Mobile applications where clients were able to interact with their accounts.`,
                tasks: [
                    `Technologies: Javascript and Python. Frameworks: Nodejs, React and Flask.
                    Infraestructure: AWS. Testing: Mocha and Chai. Databases: PostgreSQL, DynamoDB and AWS RDS.`,
                ]
            }, {
                time: '2015-2017',
                header: 'Paypal',
                place: 'Guatemala city',
                title: 'Software Engineer',
                description: `Paypal is a company operating a worldwide online payments system that supports
                    online money transfers and serves as an electronic alternative to traditional
                    paper methods. As a Software Engineer working at Paypal I helped to develop a service Node/Java based API like:
                    REST Orchestration API, Internal Tools for REST APIs, Bill Payment Worker and Accounts Promotions.`,
                tasks: [
                    'Technologies: Javascript, Golang and Java. Frameworks: Nodejs, React and Spring. DevOps: AWS. Databases: PostgreSQL.',
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
                    'Integration with APIs',
                    'Technologies: Javascript and Python. Frameworks: Nodejs, React and Django. DevOps: AWS. Database: PostgreSQL.'
                ]
            }
        ];

        const experience: Section = {
            header: 'Experience',
            achievements: experiences,
        };


        const education: Section = {
            header: 'Education',
            achievements: [
                {
                    time: '2011-2016',
                    header: 'Science and Systems Engineering',
                    place: 'Universidad de San Carlos de Guatemala',
                }
            ],
        };

        const volunteer:Section = {
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
                            <h3 className={"text-2xl mb-6"}>{section.header}</h3>
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

    renderTasks(tasks: string[] | undefined) {
        if (tasks) {
            return (
                <ul className={"text-sm"}>
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
