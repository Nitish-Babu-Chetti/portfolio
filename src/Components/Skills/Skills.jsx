import React from 'react';
import './Skills.css'
import {Link} from "react-router-dom";

export const Skills = () => {
    return (
        <div id="skills" className="mt-5">
            <div className="container" id="skills-container">
                <div className="card bg-transparent">
                    <div className="card-header text-center bg-transparent">
                        <h1 className="display-2 text-light">Skills</h1>
                    </div>
                    <div className="card-body bg-transparent">
                        <Link to="/">
                            <button>Skills</button>
                        </Link>
                        <Link to="/frontEndSkills">
                            <button>Frontend Technologies</button>
                        </Link>
                        <Link to="/backEndSkills">
                            <button>Backend Technologies</button>
                        </Link>
                        <Link to="/dataBaseSkills">
                            <button>Database Technologies</button>
                        </Link>
                        <Link to="/programmingLanguages">
                            <button>Programming Languages</button>
                        </Link>
                        <Link to="/otherSkills">
                            <button>Other Skills</button>
                        </Link>
                    </div>
                    <div className="card-footer">

                    </div>
                </div>
            </div>
        </div>
    )
}