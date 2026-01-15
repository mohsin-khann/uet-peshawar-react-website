import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';
import Blog4Img from '../../utils/images/blog4-img.jpg';
import Blog5Img from '../../utils/images/blog5-img.jpg';
import Blog6Img from '../../utils/images/blog6-img.jpg';
import Blog7Img from '../../utils/images/blog7-img.jpg';
import Blog8Img from '../../utils/images/blog8-img.jpg';
import Blog9Img from '../../utils/images/blog9-img.jpg';

const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Engineering Education',
        description: 'Exploring the importance of strong fundamentals in engineering education and how structured learning helps students succeed in technical careers.'
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'Computer Science Programs',
        description: 'An overview of how Computer Science programs focus on problem-solving, programming, and modern technologies for future careers.'
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Software Engineering Skills',
        description: 'Understanding the key skills required in Software Engineering, including teamwork, coding practices, and real-world project experience.'
    },
    {
        id: 4,
        img: [Blog4Img],
        title: 'Data Science & Analytics',
        description: 'How Data Science is shaping the future and why analytical thinking and data-driven decision making are essential for students.'
    },
    {
        id: 5,
        img: [Blog5Img],
        title: 'Civil Engineering Innovation',
        description: 'A look at how modern Civil Engineering focuses on sustainable infrastructure, smart cities, and practical engineering solutions.'
    },
    {
        id: 6,
        img: [Blog6Img],
        title: 'Mechanical Engineering Careers',
        description: 'Exploring career paths in Mechanical Engineering and how technical knowledge leads to opportunities in multiple industries.'
    },
    {
        id: 7,
        img: [Blog7Img],
        title: 'Electrical Engineering Concepts',
        description: 'Key concepts in Electrical Engineering that prepare students for careers in power systems, electronics, and emerging technologies.'
    },
    {
        id: 8,
        img: [Blog8Img],
        title: 'Student Projects & Innovation',
        description: 'Why academic projects are important for building confidence, improving skills, and preparing students for professional environments.'
    },
    {
        id: 9,
        img: [Blog9Img],
        title: 'Future of Technology',
        description: 'A discussion on emerging technologies and how engineering students can prepare themselves for future trends in the tech industry.'
    },
];

function Blog() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Blog</h1>
                <p className='text-center w-75 mb-5'>
                  Insights, articles, and updates related to engineering education, technology, and student development at University of Engineering and Technology Peshawar.
                </p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;
