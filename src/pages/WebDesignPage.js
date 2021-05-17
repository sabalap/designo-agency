import React from "react";
import { Link } from "react-router-dom";
import express from "../assets/web-design/desktop/image-express.jpg";
import transfer from "../assets/web-design/desktop/image-transfer.jpg";
import photon from "../assets/web-design/desktop/image-photon.jpg";
import builder from "../assets/web-design/desktop/image-builder.jpg";
import blogr from "../assets/web-design/desktop/image-blogr.jpg";
import camp from "../assets/web-design/desktop/image-camp.jpg";
import Banner from "../components/Banner";
import styled from "styled-components";
import bigLeaf from "../assets/shared/desktop/bg-pattern-leaf.svg";
import webDesign from "../assets/home/desktop/image-app-design.jpg";
import graphicDesign from "../assets/home/desktop/image-graphic-design.jpg";
import arrowIcon from "../assets/shared/desktop/icon-right-arrow.svg";
const WebDesign = () => {
    return (
        <div className="container">
            <AppWrapper>
                <div className="red-title">
                    <h1>Web Design</h1>
                    <p>
                        We build websites that serve as powerful marketing tools <br />
                        and bring memorable brand experiences.
                    </p>
                    <span className="circle circle-1"></span>
                    <span className="circle circle-2"></span>
                    <span className="circle circle-3"></span>
                    <span className="circle circle-4"></span>
                    <span className="circle circle-5"></span>
                </div>
                <div className="projects">
                    <div className="project">
                        <img src={express} alt="" />
                        <div className="footer">
                            <h3>EXPRESS</h3>
                            <p>A multi-carrier shipping website for ecommerce businesses</p>
                        </div>
                    </div>
                    <div className="project">
                        <img src={transfer} alt="" />
                        <div className="footer">
                            <h3>TRANSFER</h3>
                            <p>Site for low-cost money transfers and sending money within seconds</p>
                        </div>
                    </div>
                    <div className="project">
                        <img src={photon} alt="" />
                        <div className="footer">
                            <h3>PHOTON</h3>
                            <p>A state-of-the-art music player with high-resolution audio and DSP effects</p>
                        </div>
                    </div>
                    <div className="project">
                        <img src={builder} alt="" />
                        <div className="footer">
                            <h3>BUILDER</h3>
                            <p>Connects users with local contractors based on their location</p>
                        </div>
                    </div>
                    <div className="project">
                        <img src={blogr} alt="" />
                        <div className="footer">
                            <h3>BLOGR</h3>
                            <p>Blogr is a platform for creating an online blog or publication</p>
                        </div>
                    </div>
                    <div className="project">
                        <img src={camp} alt="" />
                        <div className="footer">
                            <h3>CAMP</h3>
                            <p>Get expert training in coding, data, design, and digital marketing</p>
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
    .app-design{
            background-image:url(${webDesign});
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
        .app-design::before{
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
        .app-design:hover::before{
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
export default WebDesign;