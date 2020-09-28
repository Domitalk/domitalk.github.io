import React from 'react'
// import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'


// {
//     "imageUrl": "", 
//     "header": "Header Example", 
//     "description": "Description Example", 
//     "demoLink": "",
//     "gitFront": "",
//     "gitBack": "", 
//     "liveSite": ""
// }


function Project(props) {

    const makeButton = (linkVar, desc) => {
        return (
            <Button href={linkVar} target="_blank" variant="outline-primary" className="mx-1 my-1">
                {desc}
            </Button>
        )
    }

    const createButtons = () => {
        return (
            <>
                {(props.project.demoLink.length > 1) ? makeButton(props.project.demoLink, "Demo Video") : null}
                {(props.project.gitFront.length > 1) ? makeButton(props.project.gitFront, "Github Front") : null}
                {(props.project.gitBack.length > 1) ? makeButton(props.project.gitBack, "Github Back") : null}
                {(props.project.liveSite.length > 1) ? makeButton(props.project.liveSite, "Live Site") : null}
                {(props.project.bloglink.length > 1) ? makeButton(props.project.bloglink, "Read on Medium") : null}

            </>
        )
    }

    return (
        <Jumbotron fluid >
            <Container>
                <Row>
                    <Col xs={{ span: 12, order: 1}} md={{ span: 6, order: 1}} lg={{ span: 5, order: 1}}>
                        <Image src={props.project.imageUrl} thumbnail /> 
                    </Col>
                    <Col xs={{ span: 12, order: 2}} md={{ span: 6, order: 2 }} lg={{ span: 7, order: 2 }}>
                        <h4>{props.project.header}</h4>
                        <p>{props.project.description}</p>
                        {createButtons()}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>



        // <Card className="mx-2 my-2">
        //     <Card.Header>{props.project.header}</Card.Header>
        //     <Card.Img variant="top" src={props.project.imageUrl} />
        //     <Card.Body>
        //         <Card.Text>
        //             {props.project.description}
        //         </Card.Text>
        //         {createButtons()}
        //     </Card.Body>
        // </Card>



    )
}

export default Project; 