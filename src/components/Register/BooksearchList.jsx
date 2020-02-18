import React from 'react';
import {render} from 'react-dom';

const BooksearchList = (renderprops) => {
    const books = renderprops.books.map((book)=>{
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