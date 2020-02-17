import React from 'react';

const BooksearchList = (props) => {
    const books = props.books.map((book)=>{
        return (
            <div key={book.id}>
                <img key={book.id} src={book.url}/>
            </div>
        );
    });

    return (
        <div>
            {books}
        </div>
    );
}

export default BooksearchList;