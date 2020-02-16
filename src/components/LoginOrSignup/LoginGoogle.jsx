import React, { Component, Fragment, useState, useEffect } from 'react';
import google from "../../img/google.png";
import styled from "styled-components";


class GoogleLogin extends Component{
  constructor(props) {
    super(props);

    this.state = {
      isSignedIn: false,
    }
  }
 
  componentDidMount() {
/* global gapi */
    window.gapi.load('auth2', () => {

      this.auth2 = gapi.auth2.init({
        client_id: '153932867230-pjm100haqgpc5dog74cv8oe2ru2cfeno.apps.googleusercontent.com'
      })
      const element = document.getElementById('loginButton');
      
      
      
      this.auth2.then(() => {
        console.log('on init');
    
        this.setState({
          isSignedIn: this.auth2.isSignedIn.get(),
        });

        if(this.isSignedIn){
          document.querySelector('#loginButton').value = 'Logout';
        }
        else 
        {
          document.querySelector('#loginButton').value = 'Login';
        }

        const gauth = gapi.auth2.getAuthInstance();//로그인 창 불러옴

        if(document.querySelector('#loginButton').value === 'Login'){
         
          this.auth2.attachClickHandler(element,{},() => {
            
            gauth.signIn().then(function(response){

              localStorage.setItem(
                "userInfo",
                JSON.stringify({
                  username: gauth.currentUser.get().getBasicProfile().getName(),
                  useremail: gauth.currentUser.get().getBasicProfile().getEmail(),
                 
                })
              );
              console.log(response);
              window.location.href = 'https://localhost:3000/';
              window.location.assign('http://localhost:3000/');
            });
          });
          
        }else 
        {
          gauth.signOut();
          alert("logout");
        }
      });
    });  
 

   
  }

  

  onLoginFailed(err) {
    this.setState({
      isSignedIn: false,
      error: err,
    })
  }
  render(){
    return(
      <Fragment>
      <GoogleLogo/>
      <Button id="loginButton">
        구글로 로그인
      </Button>
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
export default GoogleLogin;