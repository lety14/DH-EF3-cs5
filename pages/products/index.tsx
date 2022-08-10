import { GetServerSideProps, NextPage } from "next";
import React, { useState, useEffect } from "react";
import BookCard from "../../features/Book/BookCard";
import styles from "../../styles/Products.module.css";

export type Book = { name: string; id: string; image: string };
export type Books = Book[];
interface Props {
  books: Book[];
}

const Products: NextPage<Props> = ({ books }) => {
  return (
    <main>
      <div className={styles.heading}>
        <h2>Books store</h2>
        <p>Titles available: {books.length}</p>
      </div>
      <section className={styles.booksGrid}>
        {books.length &&
          books.map((book) => <BookCard key={book.id} data={book} />)}
      </section>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/products");
  const data: Book[] = await response.json();
  return {
    props: {
      books: data,
    },
  };
};

export default Products;
