import React from 'react';
import { Card, Container } from 'react-bootstrap';

import { faEarthAmericas, faPerson, faStar, faLandmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// fonts 

function Stats() {
    const statsArray = [
        { id: 1, title: "Country Covered", describe: '+8', font: faEarthAmericas },
        { id: 3, title: "Unique Clients", describe: '+1800', font: faPerson },
        { id: 4, title: "User Review", describe: 4.3, font: faStar },
        { id: 5, title: "Most City Viseted", describe: 'Rome', font: faLandmark },
    ];
    return (
        <div className="stats pb-5 pt-4" id="stats">
            <Container>
                <div className="theTitle text-center pt-2 ">
                    <h2> Our Awesome Stats </h2>
                </div>
                <div className=" row  justify-content-center">

                    {statsArray.map((item) => (
                        <div className="col-lg-3 col-md-6 col-sm-12 pt-3 pb-3 d-flex justify-content-center align-items-center text-center " key={item.id}>
                            <Card className="stats-cards" style={{ width: '18rem' }} >
                                <FontAwesomeIcon
                                    icon={item.font} size="3x"
                                    className=" p-4 fontStats" />
                                <Card.Body>
                                    <Card.Title className="mb-4 stats-title fw-bold fs-3">{item.describe}</Card.Title>
                                    <Card.Text className=" pb-3 fs-5" >{item.title}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>


                    ))}
                </div>
            </Container>
        </div>

    )
}

export default Stats;