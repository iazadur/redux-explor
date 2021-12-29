import React from 'react';
import Book from '../components/Book/Book';
import PageLayout from '../components/PageLayout/PageLayout';
import { useSelector } from 'react-redux';
const Discover = () => {
    const discoverBooks = useSelector(state =>state.books.discover)
    return (
        <PageLayout>
            {
                discoverBooks.map((book) => (<Book key={book.id} book={book} />))
            }
        </PageLayout>
    );
};

export default Discover;