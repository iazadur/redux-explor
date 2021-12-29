import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SingleBook from '../components/Book/Book';
import PageLayout from '../components/PageLayout/PageLayout';

const ReadingList = () => {
    const ReadingList = useSelector(state => state.books.readingList)
    console.log(ReadingList);
    return (
        <PageLayout>
            {ReadingList?.map((book, idx) => <SingleBook book={book} key={idx} />)}
            <p>Looks like you've finished all your books! Check them out in your <Link to="finish">finished books</Link> or <Link to="/">discover more</Link>.</p>
        </PageLayout>
    );
};

export default ReadingList;