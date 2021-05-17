import React from "react";
import styled from "styled-components";
import canadaMap from "../assets/locations/desktop/image-map-canada.png";
import australiaMap from "../assets/locations/desktop/image-map-australia.png";
import ukMap from "../assets/locations/desktop/image-map-united-kingdom.png";
import Banner from "../components/Banner";
const Locations = () => {
    return (
        <div className="container">
            <LocationWrapper>
                <div className="canada-map">
                    <div className="info">
                        <h2>Canada</h2>
                        <div className="details">
                            <ul>
                                <li>Designo Central Office</li>
                                <li>3886 Wellington Street</li>
                                <li>Toronto, Ontario M9C 3j5</li>
                            </ul>
                            <ul>
                                <li>Contact</li>
                                <li>P : +1 253-863-8967</li>
                                <li>M : contact@designo.co</li>
                            </ul>
                        </div>
                        <span className="circle circle-1"></span>
                        <span className="circle circle-2"></span>
                    </div>
                    <div className="map"></div>
                </div>
                <div className="australia-map">
                    <div className="map"></div>
                    <div className="info">
                        <h2>Australia</h2>
                        <div className="details">
                            <ul>
                                <li>Designo AU Office</li>
                                <li>19 Balonne Street</li>
                                <li>New South Wales 2443</li>
                            </ul>
                            <ul>
                                <li>Contact</li>
                                <li>P : (02) 6720 9092</li>
                                <li>M : contact@designo.au</li>
                            </ul>
                        </div>
                        <span className="circle circle-1"></span>
                        <span className="circle circle-2"></span>
                    </div>
                </div>
                <div className="uk-map">
                    <div className="info">
                        <h2>United Kingdom</h2>
                        <div className="details">
                            <ul>
                                <li>Designo UK Office</li>
                                <li>13 Colorado Way</li>
                                <li>Rhyd-y-fro SA8 9GA</li>
                            </ul>
                            <ul>
                                <li>Contact</li>
                                <li>P : 078 3115 1400</li>
                                <li>M : contact@designo.uk</li>
                            </ul>
                        </div>
                        <span className="circle circle-1"></span>
                        <span className="circle circle-2"></span>
                    </div>
                    <div className="map"></div>
                </div>
                <Banner />
            </LocationWrapper>
        </div>
    )
}
const LocationWrapper = styled.section`
.circle{
    width: 292px;
    height: 292px;
    position: absolute;
    z-index: 0;
    border-radius: 50%;
}
.circle-1{
    background: linear-gradient(
    90deg
    , rgba(93, 2, 2, 0.0001) 0%, rgba(93, 2, 2, 0.497569) 100%);
    bottom: 0%;
    left: 0%;
    opacity: 0.09;
}
.circle-2{
    background: linear-gradient(
    180deg
    , rgba(93, 2, 2, 0.0001) 0%, rgba(93, 2, 2, 0.497569) 100%);
    left:36%;
    bottom:0%;
    opacity: 0.06;
}
margin-top: 20px;
.canada-map{
    height:326px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap:20px;
    width: max-content;
    margin: 0 auto 30px;
    .details{
        display: grid;
        grid-template-columns: auto auto;
        ul li:first-of-type{
            color: #333136;
            font-weight: 700;
        }
        ul li {
            margin-bottom:5px;
        }
    }
    .info{
        background-color: #fdf3f0;
        padding: 40px;
        padding-left:80px;
        border-radius: 15px;
        position: relative;
        h2{
            color: #E7816B;
            font-size: 45px;
            line-height: 48px;
            letter-spacing: 2px;
            margin-bottom:20px;
            font-weight: 500;
        }
    }
    .map{
        background:url(${canadaMap});
        background-repeat:no-repeat;
        background-position: right;
        border-radius: 15px;
        width: 375px;
    }
}
.australia-map{
    height:326px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap:20px;
    margin-top:40px;
    width: max-content;
    margin: 0 auto 30px;
    .details{
        display: grid;
        grid-template-columns: auto auto;
        ul li:first-of-type{
            color: #333136;
            font-weight: 700;
        }
        ul li {
            margin-bottom:5px;
        }
    }
    .info{
        background-color: #fdf3f0;
        padding: 40px;
        padding-left:80px;
        border-radius: 15px;
        position: relative;
        h2{
            color: #E7816B;
            font-size: 45px;
            line-height: 48px;
            letter-spacing: 2px;
            margin-bottom:20px;
            font-weight: 500;
        }
    }
    .map{
        background:url(${australiaMap});
        background-repeat:no-repeat;
        background-position: right;
        border-radius: 15px;
        width: 375px;
    }
}
.uk-map{
    height:326px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap:20px;
    width: max-content;
    margin: 0 auto;
    .details{
        display: grid;
        grid-template-columns: auto auto;
        ul li:first-of-type{
            color: #333136;
            font-weight: 700;
        }
        ul li {
            margin-bottom:5px;
        }
    }
    .info{
        background-color: #fdf3f0;
        padding: 40px;
        padding-left:80px;
        border-radius: 15px;
        position: relative;
        h2{
            color: #E7816B;
            font-size: 45px;
            line-height: 48px;
            letter-spacing: 2px;
            margin-bottom:20px;
            font-weight: 500;
        }
    }
    .map{
        background:url(${ukMap});
        background-repeat:no-repeat;
        background-position: right;
        border-radius: 15px;
        width: 375px;
    }
}
@media (max-width:1024px){
    > div{
    display: flex !important;
    flex-direction: column !important;
    height: auto !important;
    .info{
        width: 700px;
        padding:40px !important;
        text-align: center;
    }
    .circle{
        display:none;
    }
    .map{
        height:326px;
        margin: 0 auto;
        }
    }
    > div:nth-of-type(2){
        flex-direction:column-reverse !important;
    }
}
@media (max-width:768px){
    > div{
        max-width: 500px;
        margin: 0 auto;
    }
    > div .info{
        max-width:100%;
    }
    .talk-about .circle{
        display:none;
    }
    .talk-about{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        .info-text{
            margin-bottom: 30px;
        }
    }
}
@media (max-width:580px){
    > div{
        width:100% !important;
        .details{
            display: flex !important;
            flex-direction: column;
            ul:first-of-type{
                margin-bottom: 15px;
            }
        }
    }
}
@media (max-width:420px){
    .talk-about{
        padding-left: 20px;
        padding-right: 20px;
    }
}
@media (max-width:410px){
    .map{
        width: 300px !important;
        height: 290px !important;
    }
}
`
export default Locations;