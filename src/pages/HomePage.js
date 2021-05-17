import React from "react";
import styled from "styled-components";
import phoneImage from "../assets/home/desktop/image-hero-phone.png"
import circleImage from "../assets/home/desktop/bg-pattern-hero-home.svg";
import grayCircle from "../assets/shared/desktop/bg-pattern-leaf.svg";
import designLeft from "../assets/home/desktop/image-web-design-large.jpg";
import appDesign from "../assets/home/desktop/image-app-design.jpg";
import graphicDesign from "../assets/home/desktop/image-graphic-design.jpg";
import arrowIcon from "../assets/shared/desktop/icon-right-arrow.svg";
import passionateImage from "../assets/home/desktop/illustration-passionate.svg";
import resourcefulImage from "../assets/home/desktop/illustration-resourceful.svg";
import friendlyImage from "../assets/home/desktop/illustration-friendly.svg";
import { Link } from "react-router-dom";
import { useUseContext } from "../context/context";
import Banner from "../components/Banner";
const HomePage = () => {
    const { isSidebarOpen } = useUseContext();
    return (
        <HomePageWrapper>
            <div className="container">
                {isSidebarOpen ? (
                    null
                ) : (
                    <React.Fragment>
                        <section className="red-info">
                            <div className="text">
                                <h1>
                                    Award-winning custom <br />
                            designs and digital <br />
                            branding solutions
                        </h1>
                                <p>
                                    With over 10 years in the industry, we are experienced in creating <br />
                        fully responsive websites, app design, and engaging brand <br />
                        experiences. Find out more about our services.
                        </p>
                                <Link to="/appdesign" className="learn-more-btn btn">learn more</Link>
                            </div>
                            <div className="img">
                                <img src={phoneImage} alt="" />
                            </div>
                        </section>
                        <section className="projects-categories">
                            <Link to="/webdesign" className="design-left">
                                <h3>web design</h3>
                                <p>view projects</p>
                            </Link>
                            <div className="design-right">
                                <Link to="/appdesign" className="app-design">
                                    <h3>app design</h3>
                                    <p>view projects</p>
                                </Link>
                                <Link to="/graphicdesign" className="graphic-design">
                                    <h3>graphic design</h3>
                                    <p>view projects</p>
                                </Link>
                            </div>
                        </section>
                        <section className="features">
                            <div className="passionate">
                                <img src={passionateImage} alt="" />
                                <h4>PASSIONATE</h4>
                                <p>
                                    Each project starts with an in-depth brand research to ensure
                                    we only create products that serve a purpose.
                                    We merge art, design, and technology into exciting new solutions.
                        </p>
                            </div>
                            <div className="resourceful">
                                <img src={resourcefulImage} alt="" />
                                <h4>RESOURCEFUL</h4>
                                <p>
                                    Everything that we do has a strategic purpose.
                                    We use an agile approach in all of our projects and value customer collaboration.
                                    It guarantees superior results that fulfill our clients’ needs.
                         </p>
                            </div>
                            <div className="friendly">
                                <img src={friendlyImage} alt="" />
                                <h4>FRIENDLY</h4>
                                <p>
                                    We are a group of enthusiastic folks who know how to put people first.
                                    Our success depends on our customers,
                                    and we strive to give them the best experience a company can provide.
                         </p>
                            </div>
                        </section>
                        <Banner />
                    </React.Fragment>
                )}
            </div>
        </HomePageWrapper>
    )
}

const HomePageWrapper = styled.main`

.container::before{
    content: '';
    position: absolute;
    width: 1006px;
    height: 594px;
    background-image:url(${grayCircle});
    top: 470px;
    left: -54px;
    z-index:-2;
}
.container::after{
        content:"";
        position: absolute;
        background:url(${grayCircle});
        width: 1006px;
        height: 594px;
        z-index:-2;
        left:465px;
        transform: rotate(180deg);
        top:1845px;
    }
margin-top:20px;
.red-info{
    background-color: #E7816B;
    border-radius: 15px;
    display: flex;
    align-items: center;
    height: 640px;
    position: relative;
    overflow:hidden;
    .text{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 70px;
        h1{
            font-size: 48px;
            line-height: 60px;
            color:white;
            font-weight:500;
            margin-bottom:35px;
        }
        p{
            font-size: 17px;
            font-weight: 400;
            line-height: 30px;
            letter-spacing: 0px;
            color:white;
            margin-bottom:35px;
        }
        .learn-more-btn{
           background:white;
           color: #1D1C1E;
           text-align:center;
           padding: 18px 20px;
           transition: 0.3s linear;
           &:hover{
               color: #FFFFFF;
               background-color: #FFAD9B;
           }
        }
    }
    .img{
        width:50%;
        height: 100%;
       img{
            position: absolute;
            top:-32px;
       }
    }
    .img::before{
        content: '';
    position: absolute;
    right: 0px;
    width: 640px;
    height: 640px;
    background-image: url(${circleImage});
    }
}
    .projects-categories .design-left{
        background-image: url(${designLeft});
        height:100%;
        background-repeat: no-repeat;
        flex:1;
        background-position: center;
        max-width:541px;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        cursor: pointer;
        color: white;
    }
    .design-left::before{
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
    .design-left:hover::before{
        background: rgba(231, 129, 107, 0.7);
    }
    .projects-categories{
        height:640px;
        margin: 160px auto 0;
        display: flex;
        max-width:1110px;
        justify-content: space-between;
        font-weight: 500;
        color:white;
        text-transform:uppercase;
        margin-bottom: 150px;
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
        .design-right{
            flex:1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            max-width:541px;
        }
        .design-right .app-design{
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
        .design-right .graphic-design{
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
    .features{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 55px;
        margin-bottom: 30px;
        > div{
            text-align:center;
            position: relative;
            color: #333136;
            h4{
                font-size:21px;
                font-weight:500;
                margin-top:65px;
                letter-spacing:5px;
                margin-bottom:30px;
            }
            p{
                font-size:16px;
                line-height:25px;
            }
        }
        .passionate::before{
            background: linear-gradient(
            90deg
            , rgba(93, 2, 2, 0.497569) 0%, rgba(93, 2, 2, 0.0001) 100%);
            content: '';
            width: 202px;
            height: 202px;
            z-index: 1;
            position: absolute;
            top: 0px;
            left: 74px;
            opacity: 0.2;
            border-radius: 50%;
        }
        .resourceful::before{
            background: linear-gradient(
                        180deg
                        , rgba(93, 2, 2, 0.0001) 0%, rgba(93, 2, 2, 0.497569) 100%);
            content: '';
            width: 202px;
            height: 202px;
            z-index: 1;
            position: absolute;
            top: 0px;
            left: 74px;
            opacity: 0.2;
            border-radius: 50%;
        }
        .friendly::before{
            background: linear-gradient(
                        180deg
                        , rgba(93, 2, 2, 0.497569) 0%, rgba(93, 2, 2, 0.0001) 100%);
            content: '';
            width: 202px;
            height: 202px;
            z-index: 1;
            position: absolute;
            top: 0px;
            left: 74px;
            opacity: 0.2;
            border-radius: 50%;
        }
    }
    .circle{
        width: 292px;
        height: 292px;
        opacity: 0.31;
        position: absolute;
        z-index: 0;
        border-radius: 50%;
    }
    .circle-one{
        background: linear-gradient(
        90deg
        , rgba(93, 2, 2, 0.0001) 0%, rgba(93, 2, 2, 0.497569) 100%);
        top: -150px;
        left: 575px;
    }
    .circle-two{
        background: linear-gradient(
        0deg
        , rgba(93, 2, 2, 0.0001) 0%, rgba(93, 2, 2, 0.497569) 100%);
        top:-150px;
        right:0px;
    }
    .circle-three{
        background: linear-gradient(
        0deg
        , rgba(93, 2, 2, 0.0001) 0%, rgba(93, 2, 2, 0.497569) 100%);
        bottom:-150px;
        right:0px;
    }
    .circle-four{
        background: linear-gradient(
        90deg
        , rgba(93, 2, 2, 0.0001) 0%, rgba(93, 2, 2, 0.497569) 100%);
        bottom:-150px;
        left:575px;
    }
    .circle-five{
        background: linear-gradient(
        180deg
        , rgba(93, 2, 2, 0.0001) 0%, rgba(93, 2, 2, 0.497569) 100%);
        bottom:-150px;
        left:290px;
    }
    @media (max-width:1024px){
        .container::before{
            display:none;
        }
        .container::after{
            display:none;
        }
        .text p{
            line-height:25px !important;
        }
        .features > div::before{
            left:unset !important;
        }
    }
    .projects-categories{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 25px;
    }
    @media (max-width:830px){
        .red-info .text h1{
            font-size:30px;
            line-height:35px;
        }
        .red-info img{
            max-width: 350px;
            top: 10% !important;
        }
        .projects-categories h3, .projects-categories p{
            text-align:center;
        }
        .features{
            grid-template-columns: 1fr;
        }
        .features .friendly::before{
            left:260px;
        }
        .features .resourceful::before{
            left:260px;
        }
        .features .passionate::before{
            left:260px;
        }
        .talk-about{
            padding: 30px;
            .info-text{
                max-width: 380px;
            }
        }
    }
    @media (max-width:690px){
        .projects-categories {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap:0px;
            height:auto;
            .design-left{
                height:300px;
                margin:0 auto;
                width: 300px;
                margin-bottom:20px;
            }
            .design-right{
                margin:0 auto;
                    .app-design{
                        height:300px;
                        margin:0 auto;
                        width: 300px;
                        margin-bottom: 20px;
                }
                .graphic-design{
                        height:300px;
                        margin:0 auto;
                        width: 300px;
                }
            }
        }
        .talk-about{
            display: grid;
            justify-content: center;
            text-align: center;
            .btn-touch{
                margin: 20px auto 0px auto; 
            }
        }
        .red-info{
            height: auto;
            padding-top: 50px;
            padding-bottom: 50px;
        }
        .red-info .img{
            display:none;
        }
        .red-info .text{
            padding:0px;
            width: 100%;
            text-align: center;
            .learn-more-btn{
                margin: 0 auto;
            }
        }
    }
    @media (max-width:400px) {
        .talk-about .circle{
            display:none;
        }
        .talk-about .info-text h1{
            font-size:25px;
            line-height:28px;
        }
        .projects-categories{
            h3{
                font-size:25px;
            }
            p{
                font-size:16px;
            }
            .design-left{
                width:250px;
            }
            .design-right{
                .app-design{
                    width:250px;
                }
                .graphic-design{
                    width:250px;
                    h3{
                        max-width: 150px;
                    }
                }
            }
        }
    }
`
export default HomePage;