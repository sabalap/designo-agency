import React from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import whiteLogo from "../assets/shared/desktop/logo-light.png";
import facebookIcon from "../assets/shared/desktop/icon-facebook.svg";
import youtubeIcon from "../assets/shared/desktop/icon-youtube.svg";
import twitterIcon from "../assets/shared/desktop/icon-twitter.svg";
import pinterestIcon from "../assets/shared/desktop/icon-pinterest.svg";
import instagramIcon from "../assets/shared/desktop/icon-instagram.svg";
import lightFacebook from "../assets/shared/desktop/icon-facebook-color.svg";
import lightYotuube from "../assets/shared/desktop/icon-youtube-color.svg";
import lightTwitter from "../assets/shared/desktop/icon-twitter-color.svg";
import lightPinterest from "../assets/shared/desktop/icon-pinterest-color.svg";
import lightInstagram from "../assets/shared/desktop/icon-instagram-color.svg";
const Footer = () => {
    return (
        <FooterWrapper>
            <div className="container">
                <div className="footer-header">
                    <Link to="/">
                        <img src={whiteLogo} alt="" />
                    </Link>
                    <ul>
                        <li>
                            <Link to="/about">
                                our company
                            </Link>
                        </li>
                        <li>
                            <Link to="/locations">
                                locations
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-details">
                    <ul className="part-1">
                        <li>Designo Central Office</li>
                        <li>3886 Wellington Street</li>
                        <li>Toronto, Ontario M9C 3J5</li>
                    </ul>
                    <ul className="part-2">
                        <li>Contact Us (Central Office)</li>
                        <li>P : +1 253-863-8967</li>
                        <li>M : contact@designo.co</li>
                    </ul>
                    <ul className="social-icons">
                        <li className="facebook"></li>
                        <li className="youtube"></li>
                        <li className="twitter"></li>
                        <li className="pinterest"></li>
                        <li className="instagram"></li>
                    </ul>
                </div>
            </div>
        </FooterWrapper>
    )
}
const FooterWrapper = styled.footer`
padding-bottom:60px;
padding-top: 130px;
background: #1D1C1E;
.footer-header{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.footer-header img{
    width: 196px;
    height: 28px;
}
.footer-header::after{
    content:"";
    width:100%;
    height:1px;
    background:white;
    position: absolute;
    opacity:0.1;
    top: 70px;
}
.footer-header ul{
    display: flex;
    width: 390px;
    justify-content: space-between;
}
.footer-header ul a{
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 2px;
    text-decoration:none;
    color:white;
    text-transform:uppercase;
    position: relative;
}
.footer-header ul a::after{
    content:"";
    position: absolute;
    background:white;
    width:100%;
    height:1px;
    transform:scale(0);
    bottom:0px;
    display:block;
    transition:transform 0.2s ease-in-out;
}
.footer-header ul a:hover::after{
    transform:scale(1);
}
.footer-details{
    margin-top: 70px;
    color:white;
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    li{
        margin-bottom:7px;
        opacity:0.5;
    }
    li:last-of-type{
        margin-bottom:0px;
    }
    .part-1 li:first-of-type{
        font-weight:700;
    }
    .part-2 li:first-of-type{
        font-weight:700;
    }
    .social-icons{
        width:190px;
        display: flex;
        justify-content: space-between;
        align-self: end;
    }
}
.social-icons li{
    height:24px;
    width:24px;
    cursor: pointer;
    background-repeat: no-repeat;
    opacity:unset;
    margin-bottom:0px;
    transition:0.2s ease-in-out;
}
.facebook{
        background-image:url(${facebookIcon});
        &:hover{
            background-image:url(${lightFacebook})
        }
    }
.youtube{
    background-image:url(${youtubeIcon});
    &:hover{
        background-image:url(${lightYotuube})
    }
}
.twitter{
    background-image:url(${twitterIcon});
    &:hover{
        background-image:url(${lightTwitter})
    }
}
.pinterest{
    background-image:url(${pinterestIcon});
    &:hover{
        background-image:url(${lightPinterest})
    }
}
.instagram{
    background-image:url(${instagramIcon});
    &:hover{
        background-image:url(${lightInstagram})
    }
}
@media (max-width:690px){
    .footer-header{
            display: flex;
            flex-direction: column;
            > a{
                margin-bottom:15px;
            }
        }
        .footer-header::after {
            top: 100px;
        }
        .footer-details{
            display: flex;
            flex-direction: column;
            align-items: center;
            .part-1{
                width: 205px;
                text-align: center;
                margin-bottom:10px;
            }
            .part-2{
                width: 205px;
                text-align: center;
                margin-bottom:25px;
            }
            .social-icons{
                margin:0 auto;
            }
        }
}
@media (max-width:420px){
    .footer-header ul{
        flex-direction: column;
        align-items: center;
        max-width:270px;
        }
        .footer-header::after {
            top: 140px;
        }
    }
`
export default Footer;