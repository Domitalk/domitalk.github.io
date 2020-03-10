import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Project from '../Components/Project'

const randomExamples = [
    {
        "imageUrl": "", 
        "header": "Header Example", 
        "description": "Description Example", 
        "demoLink": "",
        "gitFront": "",
        "gitBack": "", 
        "liveSite": ""
    },
    {
        "imageUrl": "", 
        "header": "Header Example", 
        "description": "Description Example", 
        "demoLink": "",
        "gitFront": "",
        "gitBack": "", 
        "liveSite": ""
    }, 
    {
        "imageUrl": "", 
        "header": "Header Example", 
        "description": "Description Example", 
        "demoLink": "",
        "gitFront": "",
        "gitBack": "", 
        "liveSite": ""
    }, 
    {
        "imageUrl": "", 
        "header": "Header Example", 
        "description": "Description Example", 
        "demoLink": "",
        "gitFront": "",
        "gitBack": "", 
        "liveSite": ""
    }, 
    {
        "imageUrl": "", 
        "header": "Header Example", 
        "description": "Description Example", 
        "demoLink": "",
        "gitFront": "",
        "gitBack": "", 
        "liveSite": ""
    }, 
]

function ProjectsContainer(props) {

    const mapAllProjects = () => {
        // how should I feed the data? 
        return randomExamples.map((project) => {
            return (
                <Col xs={18} md={9} lg={6}>
                    <Project project={project}/>
                </Col>
            )
        })
    }

    return (
        <Container>
            <Row>
                {/* <Col xs={18} md={9} lg={6}></Col> */}
                {mapAllProjects()}
            </Row>
        </Container>
    )
}

export default ProjectsContainer; 