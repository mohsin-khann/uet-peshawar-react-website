import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import ArtCourseImg from '../../utils/images/art-course.jpg';
import BusinessCourseImg from '../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
import EducationCourseImg from '../../utils/images/education-course.jpg';
import HealthcareCourseImg from '../../utils/images/healthcare-course.jpg';
import LawCourseImg from '../../utils/images/law-course.jpg';
import MusicCourseImg from '../../utils/images/music-course.jpg';
import SportCourseImg from '../../utils/images/sport-course.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: [ComputerScienceCourseImg],
        title: 'Computer Science',
        description: 'Focuses on programming, algorithms, problem solving, and modern computing technologies.'
    },
    {
        id: 2,
        img: [BusinessCourseImg],
        title: 'Software Engineering',
        description: 'Covers software development, system design, project management, and professional practices.'
    },
    {
        id: 3,
        img: [EducationCourseImg],
        title: 'Data Science',
        description: 'Teaches data analysis, machine learning, statistics, and data-driven decision making.'
    },
    {
        id: 4,
        img: [ArtCourseImg],
        title: 'Civil Engineering',
        description: 'Deals with infrastructure design, construction, transportation systems, and sustainable development.'
    },
    {
        id: 5,
        img: [HealthcareCourseImg],
        title: 'Mechanical Engineering',
        description: 'Focuses on mechanics, thermodynamics, manufacturing, and mechanical system design.'
    },
    {
        id: 6,
        img: [LawCourseImg],
        title: 'Electrical Engineering',
        description: 'Covers electronics, power systems, communication technologies, and embedded systems.'
    },
];

function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Courses</h1>
                <p className='text-center w-75 mb-5'>
                  We offer strong academic programs in engineering and technology designed to build technical expertise and professional skills.
                </p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} className='img-fluid' width='500' height='400' />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='text-center fs-1 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                                <button type='button' className='btn btn-outline-light text-capitalize fw-semibold'>View course</button>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;
