import React from "react";
import styled from "styled-components";
import airFilter from "../assets/app-design/desktop/image-airfilter.jpg";
import eyeCam from "../assets/app-design/desktop/image-eyecam.jpg";
import faceIt from "../assets/app-design/desktop/image-faceit.jpg";
import todo from "../assets/app-design/desktop/image-todo.jpg";
import loopStudios from "../assets/app-design/desktop/image-loopstudios.jpg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import bigLeaf from "../assets/shared/desktop/bg-pattern-leaf.svg";
import appDesign from "../assets/home/desktop/image-web-design-small.jpg";
import graphicDesign from "../assets/home/desktop/image-graphic-design.jpg";
import arrowIcon from "../assets/shared/desktop/icon-right-arrow.svg";
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
                    <span className="circle circle-1"></span>
                    <span className="circle circle-2"></span>
                    <span className="circle circle-3"></span>
                    <span className="circle circle-4"></span>
                    <span className="circle circle-5"></span>
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
                    <Link to="/webdesign" className="web-design">
                        <h3>web design</h3>
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
position: relative;
::before{
    content:"";
    width: 1006px;
    height: 594px;
    background-image:url(${bigLeaf});
    z-index:-2;
    position: absolute;
    left: -200px;
    top: 200px;
}
.red-title{
    background-color: #E7816B;
    color:white;
    text-align:center;
    border-radius:15px;
    padding-top:80px;
    padding-bottom:80px;
    width:85%;
    margin:20px auto 150px;
    position: relative;
    overflow:hidden;
    .circle-1{
        background: linear-gradient(
        0deg
        , rgba(93, 2, 2, 0.0001) 0%, rgba(93, 2, 2, 0.497569) 100%);
        left:0px;
        top:-50%;
    }
    .circle-2{
        background: linear-gradient(
        -90deg
        , rgba(93, 2, 2, 0.0001) 0%, rgba(93, 2, 2, 0.497569) 100%);
        right:0px;
        top:-50%;
    }
    .circle-3{
        background: linear-gradient(
        -130deg
        , rgba(93, 2, 2, 0.0001) 0%, rgba(93, 2, 2, 0.497569) 100%);
        bottom:-70%;
        left:0px;
    }
    .circle-4{
        background: linear-gradient(
        -130deg
        , rgba(93, 2, 2, 0.0001) 0%, rgba(93, 2, 2, 0.497569) 100%);
        bottom:-70%;
        right:0px;
    }
    .circle{
        width: 292px;
        height: 292px;
        opacity: 0.31;
        position: absolute;
        z-index: 0;
        border-radius: 50%;
    }
    h1{
        font-size: 50px;
        line-height: 48px;
        font-weight: 500;
        margin-bottom:25px;
    }
    p{
        font-weight: 400;
    }
}
.projects{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px, 370px));
    justify-content: center;
    grid-gap: 30px;
    margin-bottom:130px;
    .project{
        max-width: 100%;
        transition: 0.2s ease-in-out;
        cursor: pointer;
        &:hover{
            transform:scale(1.02);
        }
        &:hover .footer{
            background:#E7816B;
            h3,p{
                color:white;
            }
        }
        .footer{
            background: #fdf3f0;
            padding:40px;
            text-align:center;
            border-bottom-left-radius:15px;
            border-bottom-right-radius:15px;
            margin-top:-7px;
            transition: 0.2s ease-in-out;
            h3{
                font-size: 20px;
                line-height: 26px;
                letter-spacing: 5px;
                color: #E7816B;
                font-weight:500;
                margin-bottom:15px;
            }
            p{
                color: #333136;
                font-weight: 400;
            }
        }
        img{
            width:100%;
            border-top-left-radius:15px;
            border-top-right-radius:15px;
        }
    }
}
.designs{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(520px, 541px));
    justify-content: center;
    grid-gap: 30px;
    text-transform:uppercase;
    h3{
            font-size: 40px;
            line-height: 48px;
            letter-spacing: 2px;
            margin-bottom:25px;
            z-index:2;
        }
        p{
            font-size: 15px;
            line-height: 22px;
            letter-spacing: 5px;
            z-index:2;
            position: relative;
            width:190px;
        }
        p::after{
            content: '';
            position: absolute;
            background-image:url(${arrowIcon});
            width: 6px;
            height: 10px;
            right: 0px;
            bottom: 6px;
        }
    .web-design{
            background-image:url(${appDesign});
            background-repeat: no-repeat;
            height: 50%;
            background-position: center;
            height:308px;
            border-radius: 15px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            position: relative;
            color:white;
        }
        .web-design::before{
            content: '';
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            position: absolute;
            top: 0px;
            right: unset;
            bottom: unset;
            left: unset;
            transition: 0.2s ease-in-out;
            border-radius: 15px;
        }
        .web-design:hover::before{
        background: rgba(231, 129, 107, 0.7);
    }
    .graphic-design{
            background-image:url(${graphicDesign});
            height: 50%;
            background-repeat: no-repeat;
            background-position: center;
            height:308px;
            border-radius: 15px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            position: relative;
            color:white;
        }
        .graphic-design::before{
            content: '';
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            position: absolute;
            top: 0px;
            right: unset;
            bottom: unset;
            left: unset;
            transition: 0.2s ease-in-out;
            border-radius: 15px;
        }
        .graphic-design:hover::before{
        background: rgba(231, 129, 107, 0.7);
     }
}
@media (max-width:768px){
    ::before{
        display:none;
    }
    .talk-about .circle{
        display:none;
    }
    .talk-about{
        flex-direction: column;
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
        p{
            margin-bottom:20px;
        }
    }
}
@media (max-width:600px){
    .designs{
        grid-template-columns: repeat(auto-fit,minmax(300px, 541px));
        text-align: center;
    }
    .red-title{
        width: 100%;
    }
}
`
export default AppDesign;