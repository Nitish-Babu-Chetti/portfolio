import React from 'react';
import html from "../../../skills-images/HTML.png";
import css from "../../../skills-images/CSS-Logo.png";
import js from "../../../skills-images/JavaScript-logo.png";
import bs from "../../../skills-images/Bootstrap-2.png";
import rjs from "../../../skills-images/Reactjs.svg";
import java from "../../../skills-images/Java.png";
import jdbc from "../../../skills-images/JDBC.png";
import servlets from "../../../skills-images/Servlets.png";
import Jsp from "../../../skills-images/JSP's.png";
import Hibernate from "../../../skills-images/Hibernate.png";
import Spring from "../../../skills-images/Spring-boot.png";
import sql from "../../../skills-images/Sql.png";
import mysql from "../../../skills-images/Mysql.png";
import python from "../../../skills-images/Python.png";
import numpy from "../../../skills-images/Numpy.png";
import mat from "../../../skills-images/Matplotlib.png";

export const AllSkills = () =>
{
    return (
        <div id="AllSkills">
            <div className="container" id="skills-container">
                <div className="card bg-transparent">
                    <div className="card-footer">
                        <figure>
                            <img src={html} alt=""/>
                            <figcaption>HTML</figcaption>
                        </figure>
                        <figure>
                            <img src={css} alt=""/>
                            <figcaption>CSS</figcaption>
                        </figure>
                        <figure>
                            <img src={js} alt=""/>
                            <figcaption>JavaScript</figcaption>
                        </figure>
                        <figure>
                            <img src={bs} alt=""/>
                            <figcaption>BootStrap</figcaption>
                        </figure>
                        <figure>
                            <img src={rjs} alt=""/>
                            <figcaption>React js</figcaption>
                        </figure>
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
                        <figure>
                            <img src={sql} alt=""/>
                            <figcaption>SQL</figcaption>
                        </figure>
                        <figure>
                            <img src={mysql} alt=""/>
                            <figcaption>MySql</figcaption>
                        </figure>
                        <figure>
                            <img src={python} alt=""/>
                            <figcaption>Python</figcaption>
                        </figure>
                        <figure>
                            <img src={numpy} alt=""/>
                            <figcaption>Numpy</figcaption>
                        </figure>
                        <figure>
                            <img src={mat} alt=""/>
                            <figcaption>MatPlotLib</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}