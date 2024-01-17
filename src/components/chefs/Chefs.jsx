import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ChefsCard from '../chefsCard/ChefsCard';
import './Chefs.css';

const Chefs = () => {
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch(' https://firebase-chef-d6bth0bd9-hasans-projects-3bda48be.vercel.app')
        .then((res) => res.json()).then((data)=> setChefs(data))
    }, [])
    return (
        <Container className='bg-light'>
            <h3 className='text-center mb-lg-5 names-j bg-light'>Our Master Chefs</h3>

            <Row>
                <Col className='myCol'>
                    {
                        chefs?.map((chef) => <ChefsCard
                            key={chef._id}
                            chef={chef}
                        >{chef}</ChefsCard>)
                    }
                </Col>
            </Row>

        </Container>
    );
};

export default Chefs;