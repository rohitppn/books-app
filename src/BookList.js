import Book from "./Book";
import React from "react";
import Books from "./books.json";

const BookList = () => {
  return (
    <div>
      {Books.map((ele) => {
        return (
          <Book
            image={ele.image}
            title={ele.title}
            author={ele.author}
            price={ele.price}
          />
        );
      })}
    </div>
  );
};

export default BookList;
