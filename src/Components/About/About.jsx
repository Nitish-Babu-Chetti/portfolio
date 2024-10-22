import React, {useEffect, useRef, useState} from 'react';
import './About.css';
export const About = () =>
{
    const aboutRef = useRef(null);
    const [isVisible , setIsVisible] = useState(false);
    const [scrollDirection , setScrollDirection] = useState("down");

    useEffect(()=>
    {
        let handleScroll = ()=>
        {
            let lastScrollY = window.scrollY
            window.addEventListener("scroll", ()=>
            {
                let currentScrollY = window.scrollY;

                if(currentScrollY > lastScrollY)
                {
                    setScrollDirection("down")
                }
                else
                {
                    setScrollDirection("up");
                }
                lastScrollY = currentScrollY;
            });
        }

        const observer = new IntersectionObserver(
            (entries) =>
            {
                const entry = entries[0]
                if(entry.isIntersecting)
                {
                    setIsVisible(true)
                }
                else
                {
                    setIsVisible(false)
                }
            },{threshold : 1}
        )

        if (aboutRef.current)
        {
            observer.observe(aboutRef.current)
        }

        return()=>
        {
            window.removeEventListener('scroll' , handleScroll)
            if (aboutRef.current)
            {
                observer.unobserve(aboutRef.current);
            }
        }
    })



    return (
        <div id="about" className="mt-5">
            <div className="container" id="about-container">
                <div className="card bg-transparent text-light" >
                    <div className="card-header text-center bg-transparent">
                        <h1 className="display-3 fw-semibold"> About me</h1>
                    </div>
                    <div className="card-body bg-transparent">
                        <p>
                            Hello, I’m Nitish, a passionate and driven software developer with a strong foundation in both frontend and backend technologies. I hold a degree in [Your Degree], and my technical expertise spans across a diverse range of skills, including React.js, Bootstrap, HTML, CSS, JavaScript, and Redux for frontend development, as well as Core Java, Advanced Java, JDBC, SQL, MySQL, and Spring Boot for backend development. I have a proven track record of delivering impactful projects, such as developing an eCommerce website and backend systems like ATM services and Digital Libraries. My achievements also include winning first prize for website development at a college fest and receiving the 28th award at the national level Inspire Awards in my 8th standard. I am eager to leverage my skills and experience to contribute to innovative solutions and drive success in a dynamic and forward-thinking organization.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}