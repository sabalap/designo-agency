import React from "react";
import styled from "styled-components";
import bigCircle from "../assets/contact/desktop/bg-pattern-hero-desktop.svg";
import bigCircle2 from "../assets/shared/desktop/bg-pattern-leaf.svg";
import canadaImg from "../assets/shared/desktop/illustration-canada.svg";
import australiaImg from "../assets/shared/desktop/illustration-australia.svg";
import ukImg from "../assets/shared/desktop/illustration-united-kingdom.svg";
import { Link } from "react-router-dom";
const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="container">
            <ContactWrapper>
                <div className="red-contact">
                    <div className="info">
                        <h1>Contact Us</h1>
                        <p>
                            Ready to take it to the next level?
                            Let’s talk about your project or idea and find out how we can help your business grow.
                            If you are looking for unique digital experiences that’s relatable to your users,
                            drop us a line.
                          </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email Adress" />
                        <input type="tel" placeholder="Phone" />
                        <input type="text" placeholder="Your Message" />
                        <button type="submit">submit</button>
                    </form>
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
            </ContactWrapper>
        </div>
    )
}
const ContactWrapper = styled.section`
.red-contact{
    background-color: #E7816B;
    border-radius: 15px;
    padding:60px 80px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 80px;
    align-items: center;
    position: relative;
    overflow:hidden;
    .info{
        color:white;
        ::before{
            content:"";
            background-image:url(${bigCircle});
            width: 640px;
            height: 640px;
            position: absolute;
            bottom: 0px;
            left: 0px;
            z-index:1;
        }
        h1{
            font-size: 48px;
            line-height: 48px;
            font-weight:500;
            margin-bottom:30px;
        }
        p{
            font-weight: 400;
            max-width: 480px;
            line-height: 32px;
        }
    }
    form{
        display: flex;
        flex-direction: column;
        input:last-of-type{
            padding-bottom:40px;
            :focus{
                border-bottom:1px solid white;
            }
        }
        input{
            border:none;
            background:transparent;
            border-bottom:1px solid white;
            margin-bottom:40px;
            font-size: 15px;
            font-weight: 500;
            padding-left:15px;
            padding-bottom:5px;
            outline:none;
            color:white;
            ::placeholder{
                color:white;
                opacity:0.6;
            }
            :focus{
                border-bottom:3px solid white;
            }
        }
        button{
            text-transform:uppercase;
            color:black;
            font-weight:600;
            background:white;
            border:none;
            max-width:170px;
            padding:20px 45px;
            border-radius:10px;
            align-self: flex-end;
            letter-spacing:2px;
            cursor: pointer;
            transition:0.2s ease-in-out;
            &:hover{
                color: #FFFFFF;
                background-color: #FFAD9B;
            }
        }
    }
}
.locations{
        display: flex;
        justify-content: space-around;
        margin-top: 150px;
        position: relative;
        margin-bottom: 50px;
        ::after{
            content:"";
            position: absolute;
            background:url(${bigCircle2});
            width: 1006px;
            height: 341px;
            z-index:-2;
            bottom:-80px;
            right:-120px;
        }
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
    @media (max-width:1080px){
        .red-contact .info::before{
            display:none;
        }
    }
    @media (max-width:768px){
        .locations::after{
            display:none;
        }
        .locations{
            display: grid;
        }
        .locations > div{
            margin-bottom:45px;
        }
    }
    margin-top:20px;
    @media (max-width:630px){
        .red-contact{
            grid-template-columns: 1fr;
            text-align: center;
            padding-left: 20px;
            padding-right: 20px;
            form button{
                margin:0 auto;
            }
        }
    }
`
export default Contact;