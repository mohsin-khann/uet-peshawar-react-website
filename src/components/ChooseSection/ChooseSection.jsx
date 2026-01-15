import React from 'react';
import './ChooseSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faFaceSmile, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';

function ChooseSection() {
  return (
    <div className='choose-section'>
        <div className="container">
            <h2 className='text-center mb-5'>Why choose University of Engineering and Technology Peshawar?</h2>
            <div className='row g-4'>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'>
                        <div className='mt-3'>
                            <FontAwesomeIcon icon={faTrophy} />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center mb-3'>
                                Academic Excellence
                            </Card.Title>
                            <Card.Text className='text-center'>
                                Our university focuses on quality engineering education, strong academic standards, and producing graduates who excel in Computer Science, Engineering, and technology fields.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'>
                        <div className='mt-3'>
                            <FontAwesomeIcon icon={faFaceSmile} />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center mb-3'>
                                Student-Centered Environment
                            </Card.Title>
                            <Card.Text className='text-center'>
                                We support our students through modern teaching methods, practical learning, and a motivating environment that helps them grow academically and professionally.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'>
                        <div className='mt-3'>
                            <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center mb-3'>
                                Located in Peshawar
                            </Card.Title>
                            <Card.Text className='text-center'>
                                The university is located on University Road, Peshawar, providing students with a professional academic environment and access to educational opportunities in the region.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseSection;
