/* eslint-disable react/no-unknown-property */
import './Logo.scss'
// import myLogo from '../../assets/images/logo.svg'
import { useRef, useState } from "react";
import { setTheme } from "../../helpers/Theme";

export const Logo = () => {

    //! text flip
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*+=-<>?/";
  const titleRef = useRef();

  const textFlip = () => {
    let loops = -1;
    const textInterval = setInterval(() => {
      if (titleRef.current) {
        loops = loops + 1 / 3;
        if (loops >= titleRef.current.innerText.length) {
          clearInterval(textInterval);
          return;
        }

        titleRef.current.innerText = titleRef.current.dataset.value
          .split("")
          .map((char, index) =>
            index < loops
              ? char
              : chars[Math.floor(Math.random() * chars.length)]
          )
          .join("");
      }
    }, 30);
  };

  //! toggle theme
  const [theme, setLogo]= useState(localStorage.getItem("theme"))

const handleThemeToggle =()=>{
  if (theme === 'theme-dark') {
    setTheme('theme-light');
    setLogo("theme-light");
    
} else {
    setTheme('theme-dark');
    setLogo("theme-dark");
}}
//   useEffect(() => {
//   }, []);

    return (
        <div className='header' title="click the logo to change themes">
            <svg
   className='logo'
   viewBox="0 0 400 300"
   shapeRendering="geometricPrecision"
   textRendering="geometricPrecision"
   version="1.1"
   onClick={() => handleThemeToggle()}
   
   xmlns="http://www.w3.org/2000/svg">
  <defs
     id="defs4" />
  <path
     d="M 10,10 V 120 L 30,90 h 92 l 48,-80 z"
     fill="currentColor"
     stroke-width="0.5"
     id="path1" />
  <path
     d="M 181,10 10,290 H 110 L 280,10.443352 Z"
     fill="currentColor"
     stroke-width="0.5"
     id="path2" />
  <path
     d="m 390.21829,10 -150,240 -49,-80 99,-159.556648 z"
     fill="currentColor"
     stroke-width="0.5"
     id="path3" />
  <path
     d="m 244.21828,256 16.09171,33.90829 129.90829,0.0917 -80,-140 z"
     fill="currentColor"
     stroke-width="0.5"
     id="path4" />
</svg>

            <h1
        ref={titleRef}
        className="title"
        onMouseOver={textFlip}
        data-value="arl Finkel"
      >
        arl Finkel
      </h1>
    </div>
    )
}