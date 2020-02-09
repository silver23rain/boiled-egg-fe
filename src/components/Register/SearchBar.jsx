import React,{Fragment} from "react";
import styled from "styled-components";
import appleFont from '../../font/AppleSDGothicNeoM.ttf';


const Home = () => {
  return (
    <Fragment>
        <SearchTitle>
            1. 등록할 도서를 정해주세요.
        </SearchTitle>
            <Span/>
                <SearchBox type="text" style={{outline: 'none', color:'black'}}/>
                    <SearchButton>검색</SearchButton>
        
    </Fragment>
  );
};
const Span = styled.div`
    background-color: #ffde2b;
    color: #000000;
    width: 300px;
    height: 23px;
    position: absolute;
    top: 468px; 
    left: 392px;
    z-index:3;
    `;
const SearchButton = styled.button`
    position: absolute;
    top: 537px;
    left: 879px;
    width: 114px;
    height: 68px;
    border-radius: 48px;
    background-color: #ff2e41;
    border: none;
    z-index: 4;
    color: white;
    font-size: 24px;
`;
const SearchTitle = styled.div`
    font-size: 30px;
    color: #000000;
    position:absolute;
    top: 464px; 
    left: 363px;
    font-weight: bold;
    z-index: 4;
`;
const SearchBox = styled.input`
    position:absolute;
    top: 520px; 
    left: 364px;
    width: 647px;
    height: 100px;
    border: solid 3px #4bab3f;
    background-color: #ffffff;
    z-index: 4;
    padding-left: 24px;
    font-size: 35px;
    color: #000000;
    @font-face {
        font-family: 'AppleSDGothicNeo';
        src: url(${appleFont}) format('truetype');
     }
     font-family: 'AppleSDGothicNeo';
     caret-color: black;

`;

export default Home;
