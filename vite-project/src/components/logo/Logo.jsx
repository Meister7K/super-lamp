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
        <div className='header'>
            <svg className='logo' onClick={()=>handleThemeToggle()} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 300" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                
                <path d="M-2.010139,8.162252v110l20-30h92l48-80h-160Z" transform="translate(12.010139 1.837748)" fill="currentColor" strokeWidth="0.5"/>

                <path d="M179.597109,-79.543415l-171,280h100l170-279.556648-99-.443352Z" transform="translate(1.402891 89.543415)" fill="currentColor" strokeWidth="0.5"/>

                <path d="M279.217407,-1.245279l-150,240.000001-49-80.000001l99-159.556648l100-.443352Z" transform="translate(111.000877 11.245279)" fill="currentColor" strokeWidth="0.5"/>

                <path d="M137.109662,154.935386l16.091706,33.908294l129.908294.091706-80-140-66,106Z" transform="translate(107.108622 101.064614)" fill="currentColor" strokeWidth="0.5"/></svg>
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