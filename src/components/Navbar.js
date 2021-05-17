import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { useUseContext } from "../context/context";
import logo from "../assets/shared/desktop/logo-dark.png";
const Navbar = () => {
    const { openSidebar } = useUseContext();
    return (
        <div className="container">
            <header>
                <NavWrapper>
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <button type="button" className="nav-toggle" onClick={openSidebar}>
                        <FaBars />
                    </button>
                    <ul>
                        <li>
                            <Link to='/about'>
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
                </NavWrapper>
            </header>
        </div>
    )
}

const NavWrapper = styled.nav`
.nav-toggle{
    background:transparent;
    border:none;
    font-size:20px;
    display:none;
}
> a{
    height: 28px;
}
display:flex;
margin-top:20px;
justify-content: space-between;
align-items: center;
img{
    width: 196px;
    height: 28px;
}
ul{
    padding:0px;
    max-width:390px;
    width:100%;
    display: flex;
    justify-content: space-between;
    a{
        color: #333136;
        font-size: 15px;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: 2px;
        text-transform:uppercase;
        position: relative;
    }
    a:after{
        content:"";
        position: absolute;
        width:100%;
        height:1px;
        bottom: 0px;
        left: 0px;
        background-color:#1D1C1E;
        transition: transform 0.2s ease-in-out;
        transform: scale(0);
    }
    a:hover::after{
         transform: scale(1);
    }
}
@media (max-width:700px) {
    ul{
        display:none;
    }
    .nav-toggle{
        display:unset;
    }
}
`
export default Navbar;