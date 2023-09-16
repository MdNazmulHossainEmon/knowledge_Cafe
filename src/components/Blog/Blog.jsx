import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import "./Blog.css"
import { Button } from 'react-bootstrap';

const Blog = (props) => {


    const { author_name, blog_title, read_time, publish_date, blog_cover_image, author_image } = props.blog

    const bookmarkAdded = props.bookmarkAdded

    const handleMarkAsRead = props.handleMarkAsRead

    return (
        <div className='blog-container'>
            <img className="cover-image" src={props.blog.images.blog_cover_image} alt="" />
            <div className='p-3'>

                <div className='blog-inner-container'>

                    <div className='blog'>
                        <div className="author-image">

                            <img src={props.blog.images.author_image} alt="" />

                        </div>
                        <div className='mt-2'>
                            <h4>{author_name}</h4>
                            <p>{publish_date}</p>
                        </div>
                    </div>

                    <div>
                        {read_time} min read
                        <span
                            onClick={() => bookmarkAdded(props.blog)}
                            className='ms-2'
                        >
                            <FontAwesomeIcon icon={faBookmark} />
                        </span>

                    </div>

                </div>
                <h2>{blog_title}</h2>
                <Button onClick={() => handleMarkAsRead(props.blog)}>
              Mark as read
            </Button>
            </div>

        </div>
    );
};

export default Blog;