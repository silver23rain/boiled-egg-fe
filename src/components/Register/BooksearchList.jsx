import React,{Component} from 'react';
import styled from 'styled-components';



  
const BooksearchList = props => {
    const books = props.books.map((book)=>{
        return (
            <div key={book.id}> 
                <img src={book.thumbnail} alt="img"/>
                <p>{book.title}</p>
                <p>{book.publisher}</p>
                <P>{book.publishedAt}</P>
            </div>
           
           
        );
    });

    return (
        <Wrapper>
            {books}
        </Wrapper>
    );
}
const P = styled.p`
    display: inline-block; 
    width: 100px; 
    white-space: nowrap; 
    overflow: hidden; 
    
`;
const Wrapper = styled.div`
    position: absolute;
    top:30px;
    left: 1167px;
    z-index:4;

`;
export default BooksearchList;