import React, { Component, Fragment } from 'react';
import google from "../../img/google.png";
import styled from "styled-components";

class GoogleSignup extends Component {
  
    render() {
        return (
            <Fragment>
                <GoogleLogo/>
                <Button>구글로 회원가입</Button>
            </Fragment>
        );
    }
}

const Button = styled.button`
    position: absolute;
    top: 557px;
    right: 297px;
    padding-left: 40px;
    width: 379px;
    height: 90px;
    border-radius: 45px;
    font-size: 28px;
    color: #50231b;
    background-color: #ffffff;
    border:0;
    outline:0;
    z-index: 5;
  `;

  const GoogleLogo = styled.img.attrs({
    src: google,
  })`
    position: absolute;
    right: 586px;
    top: 557px;
    width: 90px;
    height: 90px;
    z-index:6;
  `;
export default GoogleSignup;