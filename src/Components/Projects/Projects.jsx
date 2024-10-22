import React from 'react';
import './Projects.css'
import digitalLibrary from '../../images/digital_Library.jpg'

export const Projects = () =>
{
    return (
        <div id="projects" className="mt-5">
            <div className="container">
                <div className="card bg-transparent">
                    <div className="card-header text-light text-center bg-transparent">
                        <h1 className="display-3">My Projects</h1>
                    </div>
                    <div className="card-body">
                        <div className="row  mt-5">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="project-title">
                                            Ecommerce Website
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <figure className="project-1 text-center">
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSofGI77Cz3tXbKTReFuM-Gqlp88zXT4Rgm6A&s"
                                                alt="ecommerce-website-img"/>


                                            <figcaption>
                                                Implemented client-side routing for a smooth and dynamic user interface.
                                                Categorized products for easy navigation and
                                                utilized Redux state to manage product data effciently. Integrated a
                                                shopping
                                                cart feature, allowing users to add, modify,
                                                and remove items effortlessly. Designed and implemented a secure
                                                checkout
                                                process for a streamlined shopping experience.
                                                Technologies Used: React.js, Bootstrap, HTML, CSS, JavaScript, Redux
                                                Toolkit(For
                                                state Management)
                                            </figcaption>

                                            <a href="http://shopkaro.s3-website.eu-north-1.amazonaws.com/"
                                               target="_blank">
                                                <button className="btn btn-outline-info mt-5">Read More</button>
                                            </a>
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="project-title">
                                            ATM Services
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <figure className="project-1">
                                            <img
                                                src="https://img.freepik.com/premium-vector/atm-transaction-line-concept-simple-modern-style-graphic-design-illusration_385073-173.jpg"
                                                alt="atm-img"/>


                                            <figcaption>
                                                Developed a Java-based ATM Transactions System leveraging JDBC for
                                                seamless integration with MySQL database. The
                                                system offers secure user authentication against stored credentials,
                                                enabling functionalities like balance inquiry, cash
                                                withdrawals, deposits, transaction history viewing, and password
                                                management. Users can perform banking operations with
                                                ease through a user-friendly interface. Implemented robust security
                                                measures to safeguard sensitive information and ensure
                                                data integrity. This project showcases profciency in Java programming,
                                                database connectivity using JDBC, and practical
                                                application of Object-Oriented Programming principles.
                                            </figcaption>

                                            {/*<button className="btn btn-outline-info mt-5">Read More</button>*/}
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="project-title">
                                            Digital Library Management System
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <figure className="project-1">
                                            <img
                                                src={digitalLibrary}
                                                alt="ecommerce-website-img"/>


                                            <figcaption>
                                                The Digital Library Management System is an innovative application developed using Java, JDBC, and MySQL that streamlines the process of managing a digital library. This system allows users to easily search, access, and manage a vast collection of digital resources, including eBooks, articles, and multimedia content. Key features include user authentication, book borrowing and returning functionality, and an intuitive interface for browsing and searching the library's catalog. The system emphasizes efficient data handling and security, ensuring a seamless experience for both users and administrators while promoting the accessibility of educational materials.
                                            </figcaption>

                                            {/*<button className="btn btn-outline-info mt-5">Read More</button>*/}
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                )
                }