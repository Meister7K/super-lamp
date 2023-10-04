import './About.scss'
import Head from '../../assets/images/HeadshotNB.png'
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';


function About() {

    const skillArr = []

    const imageRef = useRef();

    const [open, setOpen] = useState(false);

    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/about') {
            setOpen(true);
        }
    }, [location.pathname]);

    if (open && imageRef.current) {

        imageRef.current.style.transform = 'translateY(0)'
    }


    return (
        <>
            <div className='about-container'>
                <h1 className='about-title'>A Wild Developer Appeared</h1>

                <p className='about-info'>I'm <span>Karl Finkel</span></p>
                <p className='about-info'>A former Project Coordinator with a newfound passion for web and application development. </p>
                <div className='mask'>
                <img src={Head} className='headshot' ref={imageRef} />
            </div>
                <div className='resume'>
                    {}
                </div>
            </div>
            



        </>
    )
}

export default About