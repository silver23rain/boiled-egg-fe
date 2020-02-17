import React, {Component, Fragment } from "react";
import {Link} from 'react-router-dom';
import menubar from "../../img/menubar.png";
import close_arrow from "../../img/closeArrow.png";
import open_arrow from "../../img/openArrow.png";
import profile from "../../img/profile.png";
import Logo from "./Logo";
import alarm from "../../img/alarm.png";
import styled from "styled-components";
import Font from'./FontStyle.js';

const imagesPath = {
  on: open_arrow,
  off: close_arrow
}
// const userInfo = JSON.parse(localStorage.getItem("userInfo"));
// const username = userInfo.username;
// const useremail = userInfo.useremail;

class Header extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: true,
      isLoginOn: false,
    };
    this.doSlide = this.doSlide.bind(this);
    this.logout = this.logout.bind(this);
    
  }
  componentDidMount(){
    if((localStorage.getItem("userInfo")) === null){
      this.state.isLoginOn = false;
      this.setState((prevState) => ({
        isLoginOn: !prevState.isLoginOn,
      })) // 로그인 표시 
      console.log("로컬스토리지에 값이 존재하지 않음");
      console.log(this.state.isLoginOn);

    }else { 
      //this.state.isLoginOn= true;
      this.setState((prevState) => ({
        isLoginOn: !prevState.isLoginOn,
      })) 
      console.log("로컬스토리지에 값이 존재함" + this.state.isLoginOn);
    }
  }
  
  doSlide = () =>{
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
   }
  logout = () =>{
    if(this.setState.isLoginOn === true){  
      console.log("로그인 버튼누르면 로그인화면으로 이동"+this.state.isLoginOn);  

     // window.location.href = 'https://localhost:3000/login';
      //window.location.assign('https://localhost:3000/login');
      this.setState(prevState => ({
        isLoginOn: prevState.isLoginOn,
      }))
     
    }else{ //로컬 스토리지에 값이 존재함
      console.log("로그아웃 버튼 누르면 로그인버튼으로 바뀜 false가 되어야함"+this.state.isLoginOn);  
      this.setState(prevState => ({
      isLoginOn: !prevState.isLoginOn,
    }));
    localStorage.removeItem("userInfo");
    console.log("logintoggle이 true즉 로그인으로 바뀜 "+this.state.isLoginOn);
    } 
  }
 
  getImageName = () => this.state.isToggleOn ? 'on' : 'off';

  render(){
    const imageName = this.getImageName();
    
    return (
      <Fragment>
      <Background isToggleOn={this.state.isToggleOn}/>
       <Nav isToggleOn={this.state.isToggleOn}>
        <Logo isToggleOn={this.state.isToggleOn}/>
          <Font/>
          <Profile/>  
          <Button src ={imagesPath[imageName]} onClick={this.doSlide}/>
          <Menubar/> 
          
          <Login onClick={this.logout}>{this.state.isLoginOn? '로그인' : '로그아웃'}</Login>
          <Container>
            <MenuItem>
              <Link to="/" style={{textDecoration: 'none'}}>
                <Item>나의 서재</Item>
              </Link>
              <Link to="/registerBook" style={{textDecoration: 'none'}}>
                <Item>도서 등록</Item>
              </Link >
              <Link to="/test" style={{textDecoration: 'none'}}>
                <Item child3>내 위치 설정</Item>
              </Link>
              <Link to="/test" style={{textDecoration: 'none'}}>
                <Item>카테고리</Item>
              </Link>
             

            </MenuItem>
          </Container>

          <Link to="/">
            <Alarm/>
          </Link>
        
      </Nav>
      </Fragment>
    );
  }
}

const Background = styled.div`
  width: 1920px;
  height: 1080px;
  position:absolute;
  top: 0px;
  background-color: ${props => props.isToggleOn? "null" : "rgba(255,255,255,0.7)"};
  z-index: ${props => props.isToggleOn? "null" : "40"};
  `;

const Nav = styled.div`
  position: fixed;
  top: 0px; 
  margin: 0;
  padding:0;
  left: ${props => props.isToggleOn ? "-610px" : "0px"}; 
  transition-property: left;
  transition-duration: 0.8s;
  transition-timing-function: ease;
  z-index: ${props=>props.isToggleOn? "6":"100"};

`;

const Profile = styled.img.attrs({
  src: profile
})`
  position: absolute;
  left:217.7px;
  top:132.1px;
  width: 149.8px;
  height: 149.8px;

`;
const Button = styled.img`
  position: absolute;
  left:639px;
  top:522.4px;

`;

const Menubar = styled.img.attrs({
  src:menubar
})`
  width: 710.3px;
  height: 1080px;
  margin-right:-100px;
  z-index: ${props=>props.isToggleOn? "6":"100"};
`;
const Login = styled.p`
  position: absolute;
  left:260px;
  top:310.7px;
  font-size: 21px;
  border-bottom: 2.8px solid #00b46a;
  padding-bottom: 3px;
  width: ${props=>props.isLoginOn? "70":"82"};
  text-align: center;
 `;
const Container = styled.nav`
  position: absolute;
  top: 464.3px;
  left: 197px;
  width: 300px;
  font-size: 28px;
  
`;  
const MenuItem = styled.ul`
  list-style:none; 
`;
const Item = styled.li`
  list-style: none;
  margin-bottom: 68.9px;
  position: relative;
  left: ${props=>props.child3 ? "-17px": "0px"};
`;
const Alarm = styled.img.attrs({
  src: alarm
})`
  position: absolute;
  left:32.5px;
  bottom:48.1px;
  width:35.4px;
`;




export default Header;
