import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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
                {(props.project.demoLink.length > 1) ? makeButton(props.project.demoLink, "Demo") : null}
                {(props.project.gitFront.length > 1) ? makeButton(props.project.gitFront, "Github Front") : null}
                {(props.project.gitBack.length > 1) ? makeButton(props.project.gitBack, "Github Back") : null}
                {(props.project.liveSite.length > 1) ? makeButton(props.project.liveSite, "Live Site") : null}
            </>
        )
    }

    return (
        <Card className="mx-2 my-2">
            <Card.Header>{props.project.header}</Card.Header>
            <Card.Img variant="top" src={props.project.imageUrl} />
            <Card.Body>
                <Card.Text>
                    {props.project.description}
                </Card.Text>
                {createButtons()}
            </Card.Body>
        </Card>
    )
}

export default Project; 