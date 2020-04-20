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
        <div>
            <Jumbotron fluid>
                <Container>
                    <Row>
                        <Col xs={{ span: 12, order: 2}} md={{ span: 6, order: 1 }} lg={{ span: 7, order: 1 }}>
                            <h1>Fluid Jumbotron</h1>
                            <p>Put some stuff in here</p>
                        </Col>
                        <Col xs={{ span: 12, order: 1}} md={{ span: 6, order: 2}} lg={{ span: 5, order: 2}}>
                            <Image src={"https://res.cloudinary.com/dwazq8zps/image/upload/v1583940185/rbkhzipvosexmgvcxswh.jpg"} thumbnail /> 
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <Container>
                <Row>
                    <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }}>
                        <Card className="bg-dark text-white mx-1 my-1">
                            <Card.Img src="https://res.cloudinary.com/dwazq8zps/image/upload/v1583940185/rbkhzipvosexmgvcxswh.jpg" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Languages</Card.Title>
                                <Card.Text>
                                    Extensive experience with JS and Ruby. JS including Redux and modern React functional components using hooks. Ruby with ActiveRecord and Rails. 
                                </Card.Text>
                                <Card.Text>
                                    <Button as={Link} to="/portfolio/projects">Projects</Button>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }} lg={{ span: 6, order: 2 }}>
                        <Card className="bg-dark text-white mx-1 my-1">
                            <Card.Img src="https://res.cloudinary.com/dwazq8zps/image/upload/v1583940185/rbkhzipvosexmgvcxswh.jpg" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>
                                    <Button as={Link} to="/portfolio/about">About</Button>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage; 