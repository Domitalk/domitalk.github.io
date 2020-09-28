import React from 'react';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function HomePage() {
    const imgUrl = "https://domitalk.s3.us-east-2.amazonaws.com/20200923_151615.jpg"
    return (
        <>
            <Row id="Home">
                <div className="empty"/>
            </Row>
            <Image src={imgUrl} fluid />
        </>
    )
}

export default HomePage; 

