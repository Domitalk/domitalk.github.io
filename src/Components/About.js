import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function About() {
    return (
        <Container>
            <Row>
                <Col xs={{ span: 12, order: 12 }} md={{ span: 6, order: 1 }} lg={{ span: 8, order: 1 }}>
                    {/* DESCRIP: botton on small, left on med/big */}

                    <Card className="my-1">
                        <Card.Header>My Story</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <p>
                                    
                                    Full Stack Dev with a background in education. I love learning new tech and most recently in the rabbit hole of smart contracts. 
                                </p>
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="my-1">
                        <Card.Header>My Resume</Card.Header>
                        <Card.Img variant="top" src="https://images.template.net/wp-content/uploads/2018/11/Free-Blank-Resume-Template.jpg" />
                        <Card.Body>
                            {/* onClick download the files */}
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
                        <Card.Img variant="top" src="https://res.cloudinary.com/dwazq8zps/image/upload/v1584021356/rjxnmkljufeqadsc9k1r.jpg" />
                        <Card.Body>
                            <Card.Text>
                                <p>
                                    JavaScript, React.js, Ruby, Rails, Java, and SQL.
                                </p>
                                <p>
                                    My coding journey started with Ruby and after learning how to make a backend with Rails I dove into JavaScript. Recently I've been making applications with React.js and learning Java on my own. 
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="my-1">
                        <Card.Header>Links</Card.Header>
                        <Card.Body>
                            <Button variant="outline-primary" className="mx-1 my-1" href="http://github.com/domitalk" target="_blank">
                                Github
                            </Button>
                            <Button variant="outline-primary" className="mx-1 my-1" href="https://www.linkedin.com/in/dominic-m-chu" target="_blank">
                                LinkedIn
                            </Button>
                            <Button variant="outline-primary" className="mx-1 my-1" href="https://medium.com/@dominic.m.chu" target="_blank">
                                Blog
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default About; 