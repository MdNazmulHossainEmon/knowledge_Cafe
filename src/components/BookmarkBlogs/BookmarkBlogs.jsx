import React from 'react';
import "./BookmarkBlog.css"

const BookmarkBlogs = (props) => {

    const { bookmark, timeSpent } = props

    let total_time = 0

    for (let time of timeSpent) {
        total_time = total_time + time.read_time
    }

    return (
        <div className='sticky-top '>
            <div className='mt-4 bookmark-container-top'>
                <h5 className='read-title'>Spent time on read: {total_time} min </h5>

            </div>

            <div className='bookmark-container-bottom mt-4'>
                <h5 className='mb-3'>Bookmarked Blogs: {bookmark.length}  </h5>

                {
                    bookmark.map(bookName => <li
                        key={bookName.id}
                        className='list-container text-center'
                    >
                        {bookName.blogName}
                    </li>
                    )
                }
            </div>

        </div>
    );
};

export default BookmarkBlogs;