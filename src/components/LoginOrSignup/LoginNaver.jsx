import React, { Component, Fragment, useState } from 'react';
import naverlogo from "../../img/naver.png";
import styled from "styled-components";
import axios from "axios";
import loginback from "../Common/header"
//import { AuthSession } from "expo";  



// const naverLogin = new naver.LoginWithNaverId(
//   {
//       clientId: "UKx_OUzzeAGyysUWYRDq",
//       callbackUrl: "http://boiled-egg-api.jaeyeonling.com:8080/login/oauth2/code/naver",
//       isPopup: false, /* 팝업을 통한 연동처리 여부 */
//       loginButton: {color: "green", type: 3, height: 60} /* 로그인 버튼의 타입을 지정 */
//   }
// );

// /* 설정정보를 초기화하고 연동을 준비 */
// naverLogin.init();

// window.addEventListener('load', function () {
//   naverLogin.getLoginStatus(function (status) {
//       if (status) {
//   // 로그인 성공
//         alert("hi");
//       } else {
//           console.log("callback 처리에 실패하였습니다.");
//       }
//   });
// });


const NaverLogin = () => {
  const [token, setToken] = useState();  
  const [user, setUser] = useState();

  async function onClick(){
    const redirectUrl = `http://boiled-egg-api.jaeyeonling.com:8080/login/oauth2/code/naver`;
    console.log(redirectUrl);
    console.log(encodeURIComponent(redirectUrl));
  
  // const result = await AuthSession.startAsync({
  //   authUrl: `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=UKx_OUzzeAGyysUWYRDq&redirect_uri=${encodeURIComponent(
  //     redirectUrl
  //     )}&state=vU8HjlycvIPQcSDUhNqb3kzMaPR0QRAYpnzPZ62Rdng%3D`
  // });
  // console.log("result", result);
  
  // setCode(result.code);
  
  handleGetAccess();
  }
  async function handleGetAccess () {
    const {
      data: { access_token }
    } = await axios.get(`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=UKx_OUzzeAGyysUWYRDq&scope=name%20email%20profile_image&state=vU8HjlycvIPQcSDUhNqb3kzMaPR0QRAYpnzPZ62Rdng%3D&redirect_uri=http://boiled-egg-api.jaeyeonling.com:8080/login/oauth2/code/naver`);
  
  const config={
    headers: {
      Authorization: `Bearer &{access_token}`
    }
  };
  setToken(access_token);
  
  const{data} = await axios.get(
    "http://boiled-egg-api.jaeyeonling.com:8080/oauth2/authorization/naver",
    config
  );
  console.log(data);
  setUser(data);
  }
  
  return (
    
    <Fragment>
        <NaverLogo/>
        <Button onClick={onClick().bind}>네이버로 로그인</Button>

    </Fragment>
);
  
}
// class NaverLogin extends Component {

//   constructor(props){
//     super(props);
//     this.onClick = this.onClick.bind(this);
//   }
  
 
//     render() {
//         return (
//             <Fragment>
//                 <NaverLogo/>
//                 <Button onClick={onClick()}>네이버로 로그인</Button>
       
//             </Fragment>
//         );
//     }
// }

const Button = styled.button`
    position: absolute;
    top: 432px;
    right: 297px;
    padding-left: 50px;
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

export default NaverLogin;