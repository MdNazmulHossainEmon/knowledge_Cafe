import React from 'react';

const BookmarkBlogs = (props) => {

    const { bookmark, timeSpent } = props
    console.log(timeSpent);

    let total_time = 0

    for (let time of timeSpent) {
        total_time = total_time + time.read_time
    }

    return (
        <div className='sticky-top'>
            <h5>Spent time on read: {total_time} min </h5>
            <h5>Bookmark Blogs: {bookmark.length}  </h5>

            {
                bookmark.map(bookName => <li>{bookName.author_name}</li>)
            }
        </div>
    );
};

export default BookmarkBlogs;