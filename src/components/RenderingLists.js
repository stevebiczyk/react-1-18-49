import React from "react";
import Book from './Book';

function RenderingLists() {
    const bookList = [
        "to kill a mockinbird",
        "the great gatsby",
        "the ctacher in the rye"
    ]

    const books = [
        {
            title: "to kill a mockinbird",
            author: "harper lee",
            pages: "281"
        },
        {
            title: "the great gatsby",
            author: "f. scott fitzgerald",
            pages: "218"
        },
        {
            title: "the catcher in the rye",
            author: "j. d. salinger",
            pages: "234"
        },

    ]

    return (
        <div>
            {bookList.map(book => {
                return <h2>{book}</h2>
            })}
            <hr />
            {
                books.map(book => {
                    return (
                        <div>
                            <h5>{book.title}</h5>
                            <p>{book.author}</p>
                            <p>{book.pages}</p>
                        </div>
                    )
                })
            }
            <hr />
            {
                books.map(book => {
                    return <Book book={book} />

                })
            }
        </div>
    )
}

export default RenderingLists;