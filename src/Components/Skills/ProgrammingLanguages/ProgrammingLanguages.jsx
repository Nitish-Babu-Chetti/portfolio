import React from 'react';
import java from "../../../skills-images/Java.png";
import python from "../../../skills-images/Python.png";
import js from "../../../skills-images/JavaScript-logo.png";

export const ProgrammingLanguages = ()=>
{
    return (
        <div id="programmingLanguages">
            <div className="container" id="skills-container">
                <div className="card bg-transparent">
                    <div className="card-footer">
                        <figure>
                            <img src={java} alt=""/>
                            <figcaption>Java</figcaption>
                        </figure>
                        <figure>
                            <img src={python} alt=""/>
                            <figcaption>Python</figcaption>
                        </figure>
                        <figure>
                            <img src={js} alt=""/>
                            <figcaption>JavaScript</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}