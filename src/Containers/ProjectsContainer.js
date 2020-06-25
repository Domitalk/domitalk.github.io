import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Project from '../Components/Project'
import projectData from '../fillData/projectData.js'
import Card from 'react-bootstrap/Card'




function ProjectsContainer() {

    const mapAllProjects = () => {
        return projectData.map((project) => {
            return (
                <Col xs={12} md={6} lg={4.1}>
                    <Project project={project}/>
                </Col>
            )
        })
    }

    return (
        <Container>
            <Row>
                <div className="empty"/>
            </Row>
            <Row> 
                <Col xs={{spand:12, order: 1}} md={{ span: 12, order: 1}} lg={{ span:12, order: 1}}>
                    <Card border="secondary">
                        <Card.Text className="text-center">Recent Publications/Projects</Card.Text>
                    </Card>
                </Col>
            </Row>
            <Row>
                <div className="empty"/>
            </Row>
            <Row>
                {mapAllProjects()}
            </Row>
        </Container>
    )
}

export default ProjectsContainer; 