import React from "react";
import './Navbar.css';
import '../../images/background.jpg'

export const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-sm bg-transparent" id="nav">
                <a href="/public" className="navbar-brand">Nitish</a>

                <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse mx-auto" id="navbarNav">
                    <ul className="navbar-nav" id="navitems">
                        <li className="nav-item">
                            <a href="#" className="nav-link">My Profile</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" className="nav-link">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </nav>

    )
}