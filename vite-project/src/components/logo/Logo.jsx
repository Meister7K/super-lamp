import './Logo.scss'
import myLogo from '../../assets/images/logo.svg'
import { useRef, useEffect } from "react";

export const Logo = () => {
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

  useEffect(() => {
  }, []);

    return (
        <div className='header'>
            <img className='logo' src={myLogo} />
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