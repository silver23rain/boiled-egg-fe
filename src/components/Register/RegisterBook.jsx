import React, { Component } from 'react';
import Header from '../Common/header';
import GreenCircle from '../../img/GreenCircle.png';
import YellowCircle from '../../img/YellowCircle.png';
import styled from "styled-components";
import SearchBar from './SearchBar';
import Next from '../../img/next.png';
//import axios from "axios";

class RegisterBook extends Component {
    /*state={
        books:[]
    };
    getBooks = async() => {
        const{
            data:{
                params:{books}
            }
        } = await axios.get(
            "http://boiled-egg-api.jaeyeonling.com:8080/books/search?type=TITLE&value=Hello");
            this.setState({books});
    };
    
    componentDidMount(){
        this.getBooks();
    }*/
    render() {
        //const {books} = this.state;
        return (
            <div>
                <Header/>
                <Button>
                    <TB>도서등록하기</TB>
                </Button>
                <SearchBar/>
                <CircleYellow/>
                <CircleGreen/>
                <ResultBox/> 
                {/*<BookList>
                    {books.map(book=>(
                        <BookList
                        title={book.title}
                        thumbnail={book.thumbnail}
                        />
                    ))}
                    </BookList> */}
                <Nextbtn/>
            </div>
        );
    }
}


/*const BookList = styled.div`
    position: absolute;
    width: 540px;
    height: 1080px;
    left: 1133px;
    top:0px;
    z-index:100;
`;*/
const Button = styled.button`
    position: absolute;
    top:422px;
    left:187px;
    width: 68px;
    height: 236px;
    object-fit: contain;
    border-radius: 48px;
    border: solid 3px #50231b;
    background-color: #ffffff;
    text-algin: center;
`;

const TB = styled.div`
    writing-mode: tb-rl;
    font-size: 25px;
    margin-left:10px;
    margin-top:10px;
    letter-spacing: 3px;
    color: #50231b;
    font-weight: bold;
    z-index:3;

`;

const CircleGreen = styled.img.attrs({
    src: GreenCircle,
  })`
    position: absolute;
    top: 461px;
    left: 770px;
    z-index: 2;
`;
const CircleYellow = styled.img.attrs({
    src: YellowCircle,
  })`
    position: absolute;
    top: 301.1px;
    left: 528.8px;
    z-index: 1;
`;

const ResultBox = styled.div`
     position: absolute;
     width: 540px;
     height: 1080px;
     left: 1133px;
     top:0px;
     background-color: #fffbeb;
     z-index:3;
`;
const Nextbtn = styled.img.attrs({
    src: Next,
  })`
    position: absolute;
    top: 899px;
    left: 1771px;

`;export default RegisterBook;