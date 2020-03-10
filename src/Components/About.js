import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

// Kind of have to hardcode the about section 
function About() {
    return (
        <Container>
            <Row>
                <Col xs={{ span: 12, order: 12 }} md={{ span: 6, order: 1 }} lg={{ span: 8, order: 1 }}>
                    <Card className="my-1">
                        <Card.Header>My Story</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <p>
                                    Where I have been
                                </p>
                                <p>
                                    Where I want to go
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="my-1">
                        <Card.Header>My Resume</Card.Header>
                        <Card.Img variant="top" src="https://images.template.net/wp-content/uploads/2018/11/Free-Blank-Resume-Template.jpg" />
                        <Card.Body>
                            <Button variant="outline-primary" className="mx-1 my-1">
                                DOCX
                            </Button>
                            <Button variant="outline-primary" className="mx-1 my-1">
                                PDF
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} lg={{ span: 4, order: 2 }}> 
                    {/* PROFILE: top on small, right on med/big */}
                    <Card className="my-1">
                        <Card.Header>About Me</Card.Header>
                        <Card.Img variant="top" src="https://images.gr-assets.com/users/1199327143p6/18045.jpg" />
                        <Card.Body>
                            <Card.Text>
                                <p>
                                    1. Skill #1
                                </p>
                                <p>
                                    2. Skill #2
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="my-1">
                        <Card.Header>Links</Card.Header>
                        <Card.Body>
                            <ul>
                                <li>
                                    <Button variant="outline-primary" className="mx-1 my-1">
                                        Github
                                    </Button>
                                </li>
                                <li>
                                    <Button variant="outline-primary" className="mx-1 my-1">
                                        LinkedIn
                                    </Button>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default About; 