import './Nav.scss'
import { NavLink, useLocation } from 'react-router-dom'
import { useState, useRef } from 'react'

export const Nav = () => {

    const [active, setActive] = useState(null)
    const [toggle, setToggle] = useState(false)

    const location = useLocation();

    const hamLineT = useRef();
    const hamLineM = useRef();
    const hamLineB = useRef();

    const toggleMenu = () => {
        if (toggle === false) {
            setToggle(true)
            hamLineB.current.style.transform = 'rotateZ(-45deg) translateY(-10%) translateX(-50%)'
            hamLineM.current.style.transform = 'scale(0)'
            hamLineM.current.style.opacity = '0';
            hamLineT.current.style.transform = 'rotateZ(45deg) translateY(-20%) translateX(20%)';

        } else {
            setToggle(false)
            hamLineT.current.style.transform = 'none';
            hamLineM.current.style.transform = 'scale(1)';
            hamLineB.current.style.transform = 'none';
            hamLineM.current.style.opacity = '1';
        }

    }

    return (
        <nav>
            <div className='hamburger' onClick={() => toggleMenu()}>
               <svg
  
   viewBox="0 0 130 130"
   version="1.1"
   className='ham-icon'
   xmlns="http://www.w3.org/2000/svg">
    <path
       fill='currentColor'stroke='currentColor'strokeWidth='5.29167'
       d="M 11.531441,25.20664 H 120.76023 Z"
       className='ham-t' ref={hamLineT}/>
    <path
       fill='currentColor'stroke='currentColor'strokeWidth='5.29167'
       d="M 11.531441,107.08503 H 120.76023 Z"
       className='ham-m' ref={hamLineB}/>
    <path
       fill='currentColor'stroke='currentColor'strokeWidth='5.29167'
       d="M 11.531442,66.145835 H 120.76023 Z"
       className='ham-b' ref={hamLineM} />
</svg>
            </div>
            <ul className={`nav-ul ${toggle === true ? 'visible' : 'hidden'}`}>
                <li>
                    <NavLink to='/' className={`nav-link ${active === '/' ? 'active' : ''}`}>
                        <span className='nav-name'>Home</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='nav-icon' viewBox="0 0 16 16">
                            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                        </svg></NavLink>
                </li>
                <li>
                    <NavLink to='/projects' className={`nav-link ${active === '/projects' ? 'active' : ''}`}>
                        <span className='nav-name'>Projects</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='nav-icon' viewBox="0 0 16 16">
                            <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
                            <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
                        </svg>
                    </NavLink>
                </li>
                <li>

                    <NavLink to='/about' className={`nav-link ${active === '/about' ? 'active' : ''}`}>
                        <span className='nav-name'>About</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='nav-icon' viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                        </svg>
                    </NavLink>

                </li>
                <li>

                    <NavLink to='/blog' className={`nav-link ${active === '/blog' ? 'active' : ''}`}>
                        <span className='nav-name'>Blog</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='nav-icon' viewBox="0 0 16 16">
                            <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                            <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                        </svg>
                    </NavLink>

                </li>

            </ul>

        </nav>
    )
}