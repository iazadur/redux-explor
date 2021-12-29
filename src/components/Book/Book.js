import React from "react";
import {
  HiCheckCircle,
  HiMinusCircle,
  HiPlusCircle,
  // HiMinusCircle,
  // HiCheckCircle 
} from 'react-icons/hi';
import { useDispatch, useSelector } from "react-redux";
import { addtoFinishedList, addtoReadingList, removeFromReadingList } from "../../redux/actions/BookActions";
import styles from './book.module.css'
const SingleBook = ({ book }) => {
  const dispatch = useDispatch()
  const { title, author, coverImageUrl, synopsis } = book;
  const { readingList, finishedList } = useSelector(state => state.books)
  const findBook = readingList.find(b => b.title == book.title)
  const finishBook = finishedList.find(b => b.title == book.title)
  return (
    <div className='card d-flex mb-3 p-3'
      style={{ position: 'relative' }}
    >
      <div className='row'>
        <div className='col-md-3'>
          <img className="img-fluid" src={coverImageUrl} alt='' />
        </div>
        <div className='col-md-9'>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <h6>{author}</h6>
            <p className='card-text'>{synopsis.slice(0, 500)} ...</p>
          </div>
        </div>
      </div>
      <div className={styles.control_icons} >
        {findBook ? <HiMinusCircle onClick={() => dispatch(removeFromReadingList(book.id))} title="Remove from list" className={styles.minus_icon} /> :

          <HiPlusCircle onClick={() => dispatch(addtoReadingList(book))} title="Add to Reading" className={styles.plus_icon} />
        }
        {findBook ? <HiCheckCircle onClick={() => dispatch(addtoFinishedList(book))} title="Mark as Finish" className={styles.check_icon} /> : null}
      </div>
    </div>
  );
};

export default SingleBook;
