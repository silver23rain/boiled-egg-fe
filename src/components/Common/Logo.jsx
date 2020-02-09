import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import logo from "../../img/asset3.svg";
import styled from "styled-components";


class Logo extends Component {
    render() {
        return (
            <Link to="/">
                <Logoimg/>
            </Link>
        );
    }
}

const Logoimg = styled.img.attrs({
    src: logo ,
  })`
    position: absolute;
    left: 28.1px;
    top: 43.2px;
    width:50px;
    z-index: 1;
`;


export default Logo;