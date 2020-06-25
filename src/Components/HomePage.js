import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function HomePage() {


    return (
        <>
            <Jumbotron fluid >
                <Container>
                    <Row>
                        <Col xs={{ span: 12, order: 2}} md={{ span: 6, order: 1 }} lg={{ span: 7, order: 1 }}>
                            <h1>Full Stack Developer</h1>
                            <p></p>
                        </Col>
                        <Col xs={{ span: 12, order: 1}} md={{ span: 6, order: 2}} lg={{ span: 5, order: 2}}>
                            <Image src={"https://res.cloudinary.com/dwazq8zps/image/upload/v1590607921/yproxh4ixxv7ncmzqjzv.jpg"} thumbnail /> 
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </>
    )
}

export default HomePage; 

// {/* <Container>
// <Row> 
//     <Col xs={{spand:12, order: 1}} md={{ span: 12, order: 1}} lg={{ span:12, order: 1}}>
//         <Card border="secondary">
//             <Card.Text className="text-center">Recent Publications/Projects</Card.Text>
//         </Card>
//     </Col>
// </Row>
// <Row>
//     <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }}>
//         <Card className="bg-dark text-white mx-1 my-1">
//             {/* <Card.Img src="https://res.cloudinary.com/dwazq8zps/image/upload/v1583940185/rbkhzipvosexmgvcxswh.jpg" alt="Card image" /> */}
//             <Card.Img src="" alt="Card image" />
//             <Card.ImgOverlay>
//                 <Card.Title>Current Project</Card.Title>
//                 <Card.Text>
                    
//                 </Card.Text>
//                 <Card.Text>
//                     <Button as={Link} to="/portfolio/projects">Projects</Button>
//                 </Card.Text>
//             </Card.ImgOverlay>
//         </Card>
//     </Col>
//     <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }} lg={{ span: 6, order: 2 }}>
//         <Card className="bg-dark text-white mx-1 my-1">
//             {/* <Card.Text>
//                 Testing
//             </Card.Text> */}
//             <Card.Img src="" alt="Card image" />
//             <Card.ImgOverlay>
//                 <Card.Title>Card title</Card.Title>
//                 <Card.Text>
//                 This is a wider card with supporting text below as a natural lead-in to
//                 additional content. This content is a little bit longer.
//                 </Card.Text>
//                 <Card.Text>
//                     <Button as={Link} to="/portfolio/about">About</Button>
//                 </Card.Text>
//             </Card.ImgOverlay>
//         </Card>
//     </Col>
// </Row>
// </Container> */}
