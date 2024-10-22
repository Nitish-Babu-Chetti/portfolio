import React from 'react';
import './Contact.css'
import resume from "../../Resume/Nitish's-resume.pdf";

export const Contact = () => {
    return (
        <div id="contact" className="mt-5">
            <div className="container">
                <div className="card bg-transparent text-light">
                    <div className="card-header  text-center">
                        <h1 className="display-2">Contact</h1>
                    </div>
                    <div className="card-body">
                        <div id="contact-details">
                            <a href="mailto:chetti1605@gmail.com">
                                <i className="fa fa-envelope mx-2"></i>
                                Gmail :
                                chetti1605@gmail.com</a>
                            <a href="tel:+917337481965">
                                <i className="fa fa-phone mx-2"></i>
                                Mobile Number : +91 7337481965</a>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div id="download-resume">
                            <a href={resume} download="Nitish's-resume.pdf">
                                <button className="p-2">Download Resume
                                    <i className="fa fa-download mx-2"></i>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}