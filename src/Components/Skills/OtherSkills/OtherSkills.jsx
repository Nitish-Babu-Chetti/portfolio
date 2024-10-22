import React from 'react';
import numpy from "../../../skills-images/Numpy.png";
import mat from "../../../skills-images/Matplotlib.png";

export const OtherSkills = () =>
{
    return (
        <div id="other-skills">
            <div className="container" id="skills-container">
                <div className="card bg-transparent">
                    <div className="card-footer">
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