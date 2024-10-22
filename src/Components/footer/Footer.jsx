import React from 'react';
import './Footer.css';
import resume from "../../Resume/Nitish's-resume.pdf";

export const Footer = () => {
    return (
        <footer id="footer" className="mt-5">
            <div id="footer-links">
                <ul>
                    <li className="fs-5">
                        All Rights Reserved &copy; {new Date().getFullYear()}
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href={resume} download="Nitish's-resume.pdf">Download Resume</a>
                    </li>
                    <li>
                        <a href="#skills">Check Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Check Projects</a>
                    </li>
                    <li>
                        <a href="#about">About Nitish</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
