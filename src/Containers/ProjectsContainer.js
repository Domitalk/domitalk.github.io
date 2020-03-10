import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Project from '../Components/Project'
import projectData from '../fillData/projectData.js'



function ProjectsContainer() {

    const mapAllProjects = () => {
        return projectData.map((project) => {
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
                {mapAllProjects()}
            </Row>
        </Container>
    )
}

export default ProjectsContainer; 