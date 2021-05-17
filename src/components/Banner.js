import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Banner = () => {
    return (
        <BannerWrapper className="talk-about">
            <div className="info-text">
                <h1>Let’s talk about your <br />project</h1>
                <p>
                    Ready to take it to the next level?
                            Contact us today and find out how <br />
                             our expertise can help your business grow.
                        </p>
            </div>
            <Link to="/contact" className="btn btn-touch">get in touch</Link>
            <span className="circle circle-one"></span>
            <span className="circle circle-two"></span>
            <span className="circle circle-three"></span>
            <span className="circle circle-four"></span>
            <span className="circle circle-five"></span>
        </BannerWrapper>
    )
}
const BannerWrapper = styled.section` 
    bottom: -110px;
    background-color: #E7816B;
    padding: 80px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    border-radius: 15px;
    position: relative;
    overflow: hidden;
    h1{
        font-size: 40px;
        line-height: 42px;
        margin-bottom: 20px;
    }
        .btn-touch{
        border: none;
        background: white;
        font-weight: 700;
        color: #1D1C1E;
        letter-spacing: 1px;
        font-size: 15px;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        width: 170px;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
            &:hover{
            color: #FFFFFF;
            background-color: #FFAD9B;
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
`
export default Banner;