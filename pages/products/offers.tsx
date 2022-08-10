import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { Book } from "../../types/Book.type";
import BookCard from "../../features/Book/BookCard";
import styles from "../../styles/Products.module.css";

interface Props {
  books: Book[];
}

const Offers: NextPage<Props> = ({ books }) => {
  return (
    <main>
      <div className={styles.heading}>
        <h2>Offers</h2>
        <p>Titles avialables: {books.length}</p>
      </div>
      <div className={styles.booksGrid}>
        {books.length &&
          books.map((book) => <BookCard key={book.id} data={book} />)}
      </div>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/products/offers");
  const data: Book[] = await res.json();

  return {
    props: {
      books: data,
    },
  };
};

export default Offers;
