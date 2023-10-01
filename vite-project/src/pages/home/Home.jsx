import './Home.scss'
import { useRef } from 'react';
import { TextFlipper } from '../../components/textFlipper/TextFlipper';

function Home() {

    const titleArray = ["Web Developer", "Problem Solver", "Sports Junkie", "Visual Creative", "software Engineer", "Project Coordinator"]

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

    return (
        <>
            <div className='mask'>
                <h1 ref={titleRef} className='title' onMouseOver={textFlip} data-value={"Karl Finkel"}>Karl Finkel</h1>
            </div>
            <div className="mask">
                <h3 className="port2 flipper no-point">
                    <TextFlipper textArr={titleArray} />
                </h3>
            </div>

        </>
    )
}
export default Home