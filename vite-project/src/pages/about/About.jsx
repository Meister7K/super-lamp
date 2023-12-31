import "./About.scss";
import Head from "../../assets/images/HeadshotNB.png";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Loading } from "../../components/loading/Loading";
import { Github } from "../../components/github/Github";
import Resume from "./resume/Resume";

function About() {
  // const skillArr = []

  const imageRef = useRef();

  const [open, setOpen] = useState(false);
  const [user] = useState("Meister7K");
  const [data, setData] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about") {
      setOpen(true);
    }
  }, [location.pathname]);

  if (open && imageRef.current) {
    imageRef.current.style.transform = "translateY(0)";
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.github.com/users/${user}/events/public?pages=1&per_page=10`
      );
      const output = await res.json();
      console.log(output);
      setData(output);
    };
    fetchData();
  }, []);

  const hextColor = "C72415";

  return (
    <>
      <div className="about-container page">
        <div className="mask">
          <h1 className="about-title port">A Wild Developer Appeared</h1>
        </div>

        <h4 className="about-info">
          I'm <span>Karl Finkel</span>
        </h4>
        <p className="about-info">
          A skilled Full Stack Web Developer with a background in Project
          Management, I create impactful software solutions from start to
          finish. I am dedicated to learning and updating my skills to stay
          current with industry trends. Known for my attention to detail and
          ability to solve complex problems, I take pride in writing clean,
          efficient code. I foster cross-functional collaborations to achieve
          business goals, and my transition into web development combines my
          managerial expertise with coding skills to drive progress toward a
          more efficient, inclusive, and sustainable future.
        </p>
        <br />
        <div className="mask">
          <img src={Head} className="headshot" ref={imageRef} />
        </div>

        <div className="github-data">
          <h2>Github History</h2>
          <div className="history">
            <div className="slider1">
              {data ? (
                <>
                  {" "}
                  {data.map((data) => (
                    <>
                      <Github key={data.id} {...data} />
                      {/* <Github key={data.id} {...data} /> */}
                    </>
                  ))}
                </>
              ) : (
                <Loading />
              )}</div>
              <div className="slider2">
              {data ? (
                <>
                  {" "}
                  {data.map((data) => (
                    <>
                      <Github key={data.id} {...data} />
                      {/* <Github key={data.id} {...data} /> */}
                    </>
                  ))}
                </>
              ) : (
                <Loading />
              )}
            </div>
          </div>

          <h2>Annual Commit Calendar</h2>
          <img
            className="calendar"
            src={`https://ghchart.rshah.org/${hextColor}/Meister7K`}
          />
        </div>
        <div className="resume">
          <Resume />
        </div>
      </div>
    </>
  );
}

export default About;
