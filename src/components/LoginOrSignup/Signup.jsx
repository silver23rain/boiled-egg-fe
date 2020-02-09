import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Logo from "../Common/Logo";
import LoginBackground from "./LoginBackground";
import GoogleSignup from "./SignupGoogle";
import NaverSignup from "./SignupNaver";
import styled from "styled-components";
import back from "../../img/back.png";
import Font from'../Common/FontStyle.js';

class Signup extends Component{

  render(){
    return (
        <Wrapper>
          <Logo/>
        <Font/>           
        <LoginBackground/>
            <FontLogin>회원가입</FontLogin>
            <Link to="/login">
              <Back/>
            </Link>
            <NaverSignup/>
            <GoogleSignup/>
                
          </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  position: absolute;
  width: 1920px;
  height: 1080px;
`;

const FontLogin = styled.div`
position: absolute;
top: 304px;
right: 412px;
font-size: 38px;
font-weight: 600;
line-height:1.2;
z-index: 2;
color: #50231b;
`;
const Back = styled.img.attrs({
  src: back,
})`
  position: absolute;
  top: 527.6px;
  left: 997.8px;
  z-index: 3;
`;

export default Signup;
