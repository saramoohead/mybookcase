import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import Book from './Book';

const BookList = (props) => {
    const bookListLength = props.books.length
    const itemsPerPage = 5
    const numberOfPages = bookListLength / itemsPerPage

    const slicedBookList = []
    for(let i = 0; i < bookListLength; i+=5) {
        slicedBookList.push(props.books.slice(i, itemsPerPage))

    }
    const [pageNumber, setPageNumber] = useState(0);
    let active = pageNumber+1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>
        );
    }

    return (
        <div>
            <Pagination>{items}</Pagination>
        {/* // page number not working */}
        {console.log(slicedBookList)}
            {slicedBookList[0].map(book => <Book key={book.id} book={book} buttonFunction={props.buttonFunction} buttonText={props.buttonText}/>)}
        </div>
    );
};

export default BookList;