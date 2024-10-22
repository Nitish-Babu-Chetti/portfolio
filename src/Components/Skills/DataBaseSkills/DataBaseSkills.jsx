import React from 'react';

import sql from "../../../skills-images/Sql.png";
import mysql from "../../../skills-images/Mysql.png";

export const DataBaseSkills = () => {
    return (
        <div id="dataBaseSkills">
            <div className="container" id="skills-container">
                <div className="card bg-transparent">
                    <div className="card-footer">
                        <figure>
                            <img src={sql} alt=""/>
                            <figcaption>SQL</figcaption>
                        </figure>
                        <figure>
                            <img src={mysql} alt=""/>
                            <figcaption>MySql</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}