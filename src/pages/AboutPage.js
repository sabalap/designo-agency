import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import groupImage from "../assets/about/desktop/image-about-hero.jpg";
import circle from "../assets/about/desktop/bg-pattern-hero-about-desktop.svg";
import talentImage from "../assets/about/desktop/image-world-class-talent.jpg";
import bigCircle from "../assets/shared/desktop/bg-pattern-leaf.svg";
import canadaImg from "../assets/shared/desktop/illustration-canada.svg";
import australiaImg from "../assets/shared/desktop/illustration-australia.svg";
import ukImg from "../assets/shared/desktop/illustration-united-kingdom.svg";
import dealImg from "../assets/about/desktop/image-real-deal.jpg";
import Banner from "../components/Banner";
const About = () => {
    return (
        <div className="container">
            <AboutWrapper>
                <div className="about-info">
                    <div className="text">
                        <h1>About Us</h1>
                        <p>
                            Founded in 2010, we are a creative agency that produces lasting results
                            for our clients. We’ve partnered with many startups, corporations,
                            and nonprofits alike to craft designs that make real impact.
                            We’re always looking forward to creating brands, products,
                            and digital experiences that connect with our clients’ audiences.
                        </p>
                    </div>
                    <div className="img">
                        <img src={groupImage} alt="" />
                    </div>
                </div>
                <div className="talent-box">
                    <div className="img-box">
                    </div>
                    <div className="talent-text">
                        <h1>World-class talent</h1>
                        <p>
                            We are a crew of strategists, problem-solvers, and technologists.
                            Every design is thoughtfully crafted from concept to launch,
                            ensuring success in its given market.
                            We are constantly updating our skills
                            in a myriad of platforms.
                           </p>
                        <p>
                            Our team is multi-disciplinary and we are not merely interested in form
                            — content and meaning are just as important. We give great importance to craftsmanship,
                            service, and prompt delivery.
                            Clients have always been impressed with our high-quality outcomes
                            that encapsulates their brand’s story and mission.
                           </p>
                        <div className="circle circle-1"></div>
                        <div className="circle circle-2"></div>
                        <div className="circle circle-3"></div>
                        <div className="circle circle-4"></div>
                    </div>
                </div>
                <div className="locations">
                    <div className="canada">
                        <img src={canadaImg} alt="" />
                        <h4>canada</h4>
                        <Link to="/locations">
                            <button className="btn-location">
                                see location
                            </button>
                        </Link>
                    </div>
                    <div className="australia">
                        <img src={australiaImg} alt="" />
                        <h4>australia</h4>
                        <Link to="/locations">
                            <button className="btn-location">
                                see location
                            </button>
                        </Link>
                    </div>
                    <div className="uk">
                        <img src={ukImg} alt="" />
                        <h4>united kingdom</h4>
                        <Link to="/locations">
                            <button className="btn-location">
                                see location
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="deal-box">
                    <div className="deal-text">
                        <h1>The real deal</h1>
                        <p>
                            As strategic partners in our clients’ businesses,
                            we are ready to take on any challenge as our own.
                            Solving real problems require empathy and collaboration,
                            and we strive to bring a fresh perspective to every opportunity.
                            We make design and technology more accessible and give you tools to measure success.
                           </p>
                        <p>

                            We are visual storytellers in appealing and captivating ways.
                            By combining business and marketing strategies,
                            we inspire audiences to take action and drive real results
                           </p>
                        <div className="circle circle-1"></div>
                        <div className="circle circle-2"></div>
                        <div className="circle circle-3"></div>
                        <div className="circle circle-4"></div>
                    </div>
                    <div className="img-box">
                    </div>
                </div>
                <Banner />
            </AboutWrapper>
        </div>
    )
}
const AboutWrapper = styled.main`
position: relative;
::before{
    content:"";
    position: absolute;
    background-image:url(${bigCircle});
    width: 1006px;
    height: 594px;
    z-index:-2;
    left: -200px;
    top: 300px;
}
::after{
    content: '';
    position: absolute;
    width: 1006px;
    height: 594px;
    background-image:url(${bigCircle});
    transform: rotate(180deg);
    top: 55%;
    left: 60%;
    z-index: -1;
}
margin-top: 20px;
.about-info{
    display: grid;
    grid-template-columns: 1fr auto;
    overflow: hidden;
    .text{
        background-color: #E7816B;
        padding: 50px;
        color:white;
        padding-left: 120px;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        position: relative;
        h1{
            margin-top:50px;
            font-size: 48px;
            line-height: 48px;
            margin-bottom:25px;
        }
        p{
            max-width: 500px;
            font-weight: 400;
            line-height: 32px;
        }
    }
    .text::after{
        content:"";
        background-image:url(${circle});
        position: absolute;
        width: 640px;
        height: 640px;
        top: -32%;
        left: 18%;
    }
    .img img{
        height: 100%;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
    }
}
.talent-box{
    display: grid;
    grid-template-columns: 440px 1fr;
    margin-top:170px;
}
.talent-box .img-box{
        background-image:url(${talentImage});
        height:555px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
    }
    .talent-text{
        background-color: #fdf3f0;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        padding:0px 120px;
        text-align:left;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        position: relative;
        overflow:hidden;
        .circle{
            width: 292px;
            height: 292px;
            opacity: 0.31;
            position: absolute;
            z-index: 0;
            border-radius: 50%;
            opacity: 0.06;
            z-index: 1;
            background: linear-gradient(
            90deg
            , rgba(93, 2, 2, 0.0001) 0%, rgba(93, 2, 2, 0.497569) 100%);
        }
        .circle-1{
            top: 70%;
            right: 0px;
        }
        .circle-2{
            top: 70%;
            left: 0;
        }
        .circle-3{
            top: -20%;
            left: 0;
        }
        .circle-4{
            top: -20%;
            right: 0;
        }
        h1{
            color: #E7816B;
            font-size: 42px;
            line-height: 48px;
            letter-spacing: 2px;
            font-weight: 500;
            margin-bottom:35px;
        }
        p{
            color: #333136;
            font-weight: 400;
            line-height: 26px;
        }
        p:first-of-type{
            margin-bottom:25px;
        }
    }
    .locations{
        display: flex;
        justify-content: space-around;
        margin-top: 150px;
        > div{
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            width:350px;
            h4{
                margin-top: 50px;
                color: #333136;
                font-size: 20px;
                line-height: 26px;
                letter-spacing: 5px;
                text-transform: uppercase;
                font-weight: 500;
                margin-bottom:40px;
            }
            .btn-location{
                background-color: #E7816B;
                color: #FFFFFF;
                border:none;
                text-transform:uppercase;
                padding:20px;
                border-radius:15px;
                cursor: pointer;
                letter-spacing: 1px;
                font-weight: 600;
                transition:0.3s ease-in-out;
                &:hover{
                    opacity:0.7;
                }
            }
        }
        .canada::before{
            content:"";
            position: absolute;
            background: linear-gradient(
            180deg
            , rgba(93, 2, 2, 0.497569) 0%, rgba(93, 2, 2, 0.0001) 100%);
            width: 202px;
            height: 202px;
            border-radius:50%;
            opacity:0.3;
            z-index:-1;
        }
        .australia::before{
            content:"";
            position: absolute;
            background: linear-gradient(
            -90deg
            , rgba(93, 2, 2, 0.0001) 0%, rgba(93, 2, 2, 0.497569) 100%);
            width: 202px;
            height: 202px;
            border-radius:50%;
            opacity:0.3;
            z-index:-1;
        }
        .uk::before{
            content:"";
            position: absolute;
            background: linear-gradient(
            0deg
            , rgba(93, 2, 2, 0.497569) 0%, rgba(93, 2, 2, 0.0001) 100%);
            width: 202px;
            height: 202px;
            border-radius:50%;
            opacity:0.3;
            z-index:-1;
        }
    }
    .deal-box{
        display: grid;
        grid-template-columns: 1fr 440px;
        margin-top: 150px;
        .deal-text{
            background-color: #fdf3f0;
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: center;
            padding:0px 120px;
            text-align:left;
            border-top-left-radius: 15px;
            border-bottom-left-radius: 15px;
            position: relative;
            overflow:hidden;
            .circle{
            width: 292px;
            height: 292px;
            opacity: 0.31;
            position: absolute;
            z-index: 0;
            border-radius: 50%;
            opacity: 0.06;
            z-index: 1;
            background: linear-gradient(
            90deg
            , rgba(93, 2, 2, 0.0001) 0%, rgba(93, 2, 2, 0.497569) 100%);
        }
        .circle-1{
            top: 70%;
            right: 0px;
        }
        .circle-2{
            top: 70%;
            left: 0;
        }
        .circle-3{
            top: -20%;
            left: 0;
        }
        .circle-4{
            top: -20%;
            right: 0;
        }
        h1{
            color: #E7816B;
            font-size: 42px;
            line-height: 48px;
            letter-spacing: 2px;
            font-weight: 500;
            margin-bottom:35px;
        }
        p{
            color: #333136;
            font-weight: 400;
            line-height: 26px;
        }
        p:first-of-type{
            margin-bottom:25px;
        }
        }
    }
    .deal-box .img-box{
        background-image:url(${dealImg});
        height: 585px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
    }
    @media (max-width:1024px){
        ::after{
            display:none;
        }
        ::before{
            display:none;
        }
        .about-info .text{
            padding: 40px;
        }
        .talent-box{
            grid-template-columns: 1fr;
            grid-template-rows: 555px 450px;
            .img-box{
                border-radius: 15px;
            }
            .talent-text{
                border-radius: 15px;
                margin-top: 20px;
            }
        }
    }
    @media (max-width:768px){
        .about-info{
            grid-template-columns: 1fr;
            .text::after{
                display:none;
            }
            .text{
                text-align: center;
                border-radius: 15px;
                margin-bottom: 20px;
                p{
                    margin: 0 auto;
                }
            }
            .img img{
                width:100%;
                border-radius: 15px;
            }
        }
        .talent-box .talent-text{
            text-align: center;
        }
        .locations{
            flex-direction: column;
            align-items: center;
            h4{
                margin-bottom:20px !important;
                margin-top:20px !important;
            }
            > div{
                margin-bottom:50px;
            }
        }
        .deal-box{
            grid-template-columns: 1fr;
            margin-top: 50px;
            .deal-text{
                padding: 40px;
                text-align: center;
                border-radius: 15px;
            }
            .img-box{
                margin-top: 20px;
                border-radius: 15px;
            }
        }
        .talk-about{
            flex-direction: column;
            text-align: center;
            .info-text{
                margin-bottom: 30px;
            }
        }
    }
    @media (max-width:650px){
        .talent-text .circle{
            display:none;
        }
        .talent-box {
            grid-template-columns: 1fr;
            grid-template-rows: 555px auto;
            .talent-text{
                padding-top: 30px;
                padding-bottom: 30px;
                padding-left: 20px;
                padding-right: 20px;
            }
        }
    }
    @media (max-width:450px){
        .talk-about{
            padding-left: 20px;
            padding-right: 20px;
        }
        .talent-box{
            margin-top: 80px;
        }
        .locations > div{
            width:320px;
        }
    }
`
export default About;