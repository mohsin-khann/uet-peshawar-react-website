import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>
              Here are some common questions students usually ask about admissions, programs, and academic life at University of Engineering and Technology Peshawar.
            </p>

            <Accordion defaultActiveKey="" flush>

                <Accordion.Item eventKey='0'>
                    <Accordion.Header>What programs are offered at UET Peshawar?</Accordion.Header>
                    <Accordion.Body>
                        UET Peshawar offers undergraduate programs in Computer Science, Software Engineering, Data Science, Civil Engineering, Mechanical Engineering, and Electrical Engineering.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='1'>
                    <Accordion.Header>How can I apply for admission?</Accordion.Header>
                    <Accordion.Body>
                        Students can apply through the official admission portal after the announcement of admissions and must meet the eligibility criteria set by the university.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Does the university provide career support?</Accordion.Header>
                    <Accordion.Body>
                        Yes, the university supports students through career counseling, workshops, internships, and professional development activities to prepare them for industry.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='3'>
                    <Accordion.Header>Is UET Peshawar suitable for technology-focused students?</Accordion.Header>
                    <Accordion.Body>
                        Absolutely. UET Peshawar focuses on engineering and technology education with modern curriculum, practical learning, and strong academic standards.
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;
