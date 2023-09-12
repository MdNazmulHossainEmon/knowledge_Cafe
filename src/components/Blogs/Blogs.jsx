import React, { useEffect, useState } from 'react';
import "./Blogs.css"
import { Col, Container, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={8}>
                        {
                            blogs.map(blog => <Blog
                                key={blog.id}
                                blog={blog}
                            ></Blog>)
                        }
                    </Col>

                    <Col sm={4}>
                        Blogs Item
                    </Col>


                </Row>
            </Container>
        </div>
    );
};

export default Blogs;