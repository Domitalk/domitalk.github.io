import React from 'react'
import Card from 'react-bootstrap/Card'

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

    return (
        <Card className="mx-2 my-2">
            <Card.Header>{props.project.header}</Card.Header>
            <Card.Img variant="top" src={props.project.imageUrl} />
            <Card.Body>
                <Card.Text>
                    {props.project.description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Project; 