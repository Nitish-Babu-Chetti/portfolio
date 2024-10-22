import React from "react";
import html from "../../../skills-images/HTML.png";
import css from "../../../skills-images/CSS-Logo.png";
import js from "../../../skills-images/JavaScript-logo.png";
import bs from "../../../skills-images/Bootstrap-2.png";
import rjs from "../../../skills-images/Reactjs.svg";

export const FrontEndSkills = () =>
{
    return (
        <div id="FrontEndSkills">
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
                        </div>
                    </div>
                    </div>
                    </div>
                    )
                    }