import React, { useState, useRef } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Overlay from 'react-bootstrap/Overlay'
// import Tooltip from 'react-boostrap/Tooltip'

import styled from 'styled-components'
import { Javascript } from '@styled-icons/simple-icons/Javascript'
import { ReactLogo } from '@styled-icons/simple-icons/ReactLogo'
import { Ruby } from '@styled-icons/simple-icons/Ruby'
import { Rubyonrails } from '@styled-icons/simple-icons/Rubyonrails'
import { Redux } from '@styled-icons/simple-icons/Redux'
import { Java } from '@styled-icons/fa-brands/Java'
import { Github } from '@styled-icons/simple-icons/Github'
import { Linkedin } from '@styled-icons/simple-icons/Linkedin'
import { Medium } from '@styled-icons/simple-icons/Medium'
import { Email } from '@styled-icons/material-sharp/Email'

function About() {
    const profilePicture = "https://domitalk.s3.us-east-2.amazonaws.com/20200923_152629.jpg"

    const GithubIcon = styled(Github)`
        color: black
    `
    const LinkedinIcon = styled(Linkedin)`
        color: black
    `
    const MediumIcon = styled(Medium)`
        color: black
    `
    const EmailIcon = styled(Email)`
        color: black
    `

    const [show, setShow] = useState(false)
    const target = useRef(null)

    return (
        <Container id="About">
            <Row>
                <div className="empty"/>
            </Row>

            <Row> 
                {/* <Col xs={{spand:12, order: 1}} md={{ span: 12, order: 1}} lg={{ span:12, order: 1}}>
                    <Card >
                        <Card.Text as="h3" className="text-center">About Me</Card.Text>
                    </Card>
                </Col> */}
                <Col xs={{spand:12, order: 1}} md={{ span: 12, order: 1}} lg={{ span:12, order: 1}}>
                        <h3 className="text-center">About Me</h3>
                </Col>

            </Row>
            <Row>
                <Col xs={{ span: 12, order: 12 }} md={{ span: 6, order: 1 }} lg={{ span: 8, order: 1 }}>
                    {/* DESCRIP: botton on small, left on med/big */}

                    <Card className="my-1">
                        <Card.Header>Resume</Card.Header>
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
                        <Card.Header>Dominic M. Chu</Card.Header>
                        
                        <Card.Img variant="top" src={profilePicture} />

                        {/* <Card.Img variant="top" src="https://res.cloudinary.com/dwazq8zps/image/upload/v1584021356/rjxnmkljufeqadsc9k1r.jpg" /> */}
                        <Card.Body>
                            <Card.Text>
                                <div id="spaced-icons" >
                                    <Javascript size="40" /> 
                                    <ReactLogo size="40" /> 
                                    <Ruby size="40" /> 
                                    <Rubyonrails size="40" /> 
                                    <Redux size="40" /> 
                                    <Java size="40" />
                                </div>
                                {/* <p>
                                    JavaScript, React.js, Ruby, Rails, Java, and SQL.
                                </p> */}
                                {/* <p>
                                    My coding journey started with Ruby and after learning how to make a backend with Rails I dove into JavaScript. Recently I've been making applications with React.js and learning Java on my own. 
                                </p> */}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="my-1">
                        <Card.Header>Links</Card.Header>
                        <Card.Body id="spaced-links">
                            <a href="http://github.com/domitalk" target="_blank" rel="noopener noreferrer" >
                                <GithubIcon size="48" /> 
                            </a> 
                            <a href="https://www.linkedin.com/in/dominic-m-chu" target="_blank" rel="noopener noreferrer">
                                <LinkedinIcon size="48" /> 
                            </a> 
                            <a href="https://medium.com/@dominic.m.chu" target="_blank" rel="noopener noreferrer">
                                <MediumIcon size="48" /> 
                            </a>
                            <a href={target} onClick={() => setShow(!show)}>
                                <EmailIcon size="48" />
                            </a>
                            <Overlay target={target.current} show={show} placement="top">
                                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                                    <div
                                        {...props}
                                        style={{
                                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            padding: '2px 10px',
                                            color: 'white',
                                            borderRadius: 3,
                                            ...props.style,
                                        }}
                                    >
                                        dominic.m.chu@gmail.com
                                    </div>
                                )}
                            </Overlay>
                            {/* <a target="_top" href={"mailto:dominic.m.chu@gmail.com"} >
                                <EmailIcon size="48" />
                            </a> */}

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default About; 