import React from 'react';
import './Landingpage.css';
import ferb from '../../images/ferb.png'

export const LandingPage = () => {
    return (
        <React.Fragment>
            <div id="landingPage">
                <div className="container mt-4" id="main-container">
                    <div className="card bg-transparent text-light">
                        <div className="row text-center">
                            <div className="col-md-8" id="landingpage-left-part">
                                <div id="intro" >
                                    <h1 >Hi, I'm </h1>
                                    <h1 id="name" >Nitish</h1>
                                </div>
                                <h1 className="designation-tag">And I'm a
                                    <span className="ms-2" id="designation">Full Stack Developer</span>
                                </h1>
                                <p className="text-center">As a skilled developer profcient in front-end technologies like React.js and
                                    Bootstrap, coupled with expertise in Core Java,
                                    Advanced Java, JDBC, SQL, and MySQL on the backend, I specialize in crafting dynamic
                                    and responsive applications,
                                    offering a holistic approach to full-stack development.</p>
                                <div className="text-light" id="social-media-links">
                                    <ul>
                                        <li>
                                            <a href="https://github.com/Nitish-Babu-Chetti" target="_blank"
                                               className="fa fa-github fa-3x"></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/chetti-nitish-babu-01117b249"
                                               target="_blank" className="fa fa-linkedin fa-3x"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4" id="landingpage-right-part">
                                <img src={ferb} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
