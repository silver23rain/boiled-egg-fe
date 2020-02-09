import React, { Component, Fragment } from 'react';
import naverlogo from "../../img/naver.png";
import styled from "styled-components";


class NaverSignup extends Component {
    render() {
        return (
            <Fragment>
                <NaverLogo/>
                <Button>네이버로 회원가입</Button>
            </Fragment>
        );
    }
}


const Button = styled.button`
    position: absolute;
    top: 432px;
    right: 297px;
    padding-left: 70px;
    width: 379px;
    height: 90px;
    border-radius: 45px;
    font-size: 28px;
    background-color: #ffffff;
    border:0;
    outline:0;
    z-index: 3;
    color: #50231b;
  `;
const NaverLogo = styled.img.attrs({
    src: naverlogo ,
  })`
    position: absolute;
    right: 586px;
    top: 432px;
    width: 90px;
    height: 90px;
    z-index: 4;
  `;

export default NaverSignup;