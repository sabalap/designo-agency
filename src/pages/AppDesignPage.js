import React from "react";
import styled from "styled-components";
import airFilter from "../assets/app-design/desktop/image-airfilter.jpg";
import eyeCam from "../assets/app-design/desktop/image-eyecam.jpg";
import faceIt from "../assets/app-design/desktop/image-faceit.jpg";
import todo from "../assets/app-design/desktop/image-todo.jpg";
import loopStudios from "../assets/app-design/desktop/image-loopstudios.jpg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const AppDesign = () => {
    return (
        <div className="container">
            <AppWrapper>
                <div className="red-title">
                    <h1>App Design</h1>
                    <p>
                        Our mobile designs bring intuitive digital solutions to <br />
                    your customers right at their fingertips.
                    </p>
                </div>
                <div className="projects">
                    <div className="project">
                        <img src={airFilter} alt="" />
                        <div className="footer">
                            <h3>AIRFILTER</h3>
                            <p>Solving the problem of poor indoor air quality by filtering the air</p>
                        </div>
                    </div>
                    <div className="project">
                        <img src={eyeCam} alt="" />
                        <div className="footer">
                            <h3>EYECAM</h3>
                            <p>Product that lets you edit your favorite photos and videos at any time</p>
                        </div>
                    </div>
                    <div className="project">
                        <img src={faceIt} alt="" />
                        <div className="footer">
                            <h3>TODO</h3>
                            <p>A todo app that features cloud sync with light and dark mode</p>
                        </div>
                    </div>
                    <div className="project">
                        <img src={todo} alt="" />
                        <div className="footer">
                            <h3>FACEIT</h3>
                            <p>Get to meet your favorite internet superstar with the faceit app</p>
                        </div>
                    </div>
                    <div className="project">
                        <img src={loopStudios} alt="" />
                        <div className="footer">
                            <h3>LOOPSTUDIOS</h3>
                            <p>A VR experience app made for Loopstudios</p>
                        </div>
                    </div>
                </div>
                <div className="designs">
                    <Link to="/appdesign" className="app-design">
                        <h3>app design</h3>
                        <p>view projects</p>
                    </Link>
                    <Link to="/graphicdesign" className="graphic-design">
                        <h3>graphic design</h3>
                        <p>view projects</p>
                    </Link>
                </div>
                <Banner />
            </AppWrapper>
        </div>
    )
}
const AppWrapper = styled.section`

`
export default AppDesign;