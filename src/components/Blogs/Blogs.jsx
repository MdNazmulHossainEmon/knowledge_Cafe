import React, { useEffect, useState } from 'react';
import "./Blogs.css"
import { Col, Container, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import BookmarkBlogs from '../BookmarkBlogs/BookmarkBlogs';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    const [bookmark, setBookmark] = useState([])

    const [timeSpent, setTimeSpent] = useState([])

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const bookmarkAdded = (blog) => {

        // console.log(blog);
        const newBlog = [...bookmark, blog]
        setBookmark(newBlog)
    }

    const handleMarkAsRead = (blog) => {
        const newTime = [...timeSpent, blog]
        setTimeSpent(newTime)
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col sm={8}>
                        {
                            blogs.map(blog => <Blog
                                key={blog.id}
                                blog={blog}
                                bookmarkAdded={bookmarkAdded}
                                handleMarkAsRead={handleMarkAsRead}
                            ></Blog>)
                        }
                    </Col>

                    <Col sm={4}>
                        <BookmarkBlogs
                            bookmark={bookmark}
                            timeSpent={timeSpent}
                        ></BookmarkBlogs>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Blogs;