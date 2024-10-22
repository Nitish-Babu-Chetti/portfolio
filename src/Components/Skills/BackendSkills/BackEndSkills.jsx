import React from 'react';
import java from "../../../skills-images/Java.png";
import jdbc from "../../../skills-images/JDBC.png";
import servlets from "../../../skills-images/Servlets.png";
import Jsp from "../../../skills-images/JSP's.png";
import Hibernate from "../../../skills-images/Hibernate.png";
import Spring from "../../../skills-images/Spring-boot.png";

export const BackEndSkills = () =>
{
    return (
        <div id="BackEndSkills">
            <div className="container" id="skills-container">
                <div className="card bg-transparent">
                    <div className="card-footer">
                        <figure>
                            <img src={java} alt=""/>
                            <figcaption>Java</figcaption>
                        </figure>
                        <figure>
                            <img src={jdbc} alt=""/>
                            <figcaption>Java Database Connectivity</figcaption>
                        </figure>
                        <figure>
                            <img src={servlets} alt=""/>
                            <figcaption>Servlets</figcaption>
                        </figure>
                        <figure>
                            <img src={Jsp} alt=""/>
                            <figcaption>Java Server Pages</figcaption>
                        </figure>
                        <figure>
                            <img src={Hibernate} alt=""/>
                            <figcaption>Hibernate</figcaption>
                        </figure>
                        <figure>
                            <img src={Spring} alt=""/>
                            <figcaption>Spring Boot</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}