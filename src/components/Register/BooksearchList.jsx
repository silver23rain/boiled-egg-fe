import React,{Fragment} from 'react';
import styled from 'styled-components';
import font from '../../font/210옴니고딕040.ttf';


function handleClick(key){
    console.log("hi");
    console.log("hhh"+key);
}
const BooksearchList = props => {
    
    const books = props.books.map((book, index)=>{
        return (
            <Book key={index} onClick={(index) => handleClick(index)}> 
                <Image src={book.thumbnail} alt="img"/>
                <Title>{book.title}</Title>
                <Author>{book.authors}지음 / {book.publisher}</Author>
                <Publishat>{book.publishedAt}</Publishat>
            </Book>

           
        );
    });

    return (
        <Fragment>
            <Wrapper>
                {books}
            </Wrapper>
            <Total>총 {books.length}개의 결과</Total>
        </Fragment>
    );
}
const Total = styled.div`
    position: absolute;
    top: 1033.5px;
    left: 363.5px;
    width: 140px;
    font-size: 20px;
    color: #707070;
    z-index:5;
`; 
const Book = styled.div`
    height: 160px;
    
`;
const Author = styled.div`
    font-size: 22px;
    color: #707070;
    position: relative;
    top: -66px;
    left: 170px;
    height: 318px;
    width: 318px;
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
    
`
const Title = styled.div`
    @font-face {
        font-family: '210옴니고딕040';
        src: url(${font}) format('truetype');
    }
    font-size: 25px;
    font-family: '210옴니고딕040';
    width: 318px;
    color: #000000;
    position: relative;
    top: -80px;
    left: 170px;
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
    `;

const Image = styled.img`
    position: relative;
    top: 30px;
    left: 34px;
    height:106px;
    width:106px;
`;
const Publishat = styled.div`
    position: relative;
    top: -345px;
    left: 170px;
    font-size: 22px;
    color: #707070;
    width: 90px; 
    white-space: nowrap; 
    overflow: hidden; 
    
`;
const Wrapper = styled.div`
    position: absolute;
    z-index:5;
    height: 650px;
    width: 540px;
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
    width: 16px;  /* 세로축 스크롤바 길이 */
    height: 1080px;  /* 가로축 스크롤바 길이 */
    background-color: #ffde2b;
  }
  &::-webkit-scrollbar-track {
    background-color: #f7f7f7;
    height: 1080px;
  }
  
`;

export default BooksearchList;