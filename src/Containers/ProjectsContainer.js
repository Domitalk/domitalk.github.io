import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'

import Project from '../Components/Project'

function ProjectsContainer(props) {
    // const [projectsToShow, setProjectsToShow] = useState([])
    const [buttonToggle, setButtonToggle] = useState(false)
    // const [open, setOpen] = useState(false)

    // const projectsToShow = props.projectData.slice(3)

    const buttonStyle = {
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"
    }

    const handleShowMoreProjects = () => {
        // setProjectsToShow(props.projectData.slice(3))
        setButtonToggle(true)
        // setOpen(true)
    }

    const mapMoreProjects = () => {
        return props.projectData.slice(3).map((project => {
            return (
                <Col xs={12} md={12} lg={12}>
                    <Project project={project}/>
                </Col>
            )
        }))
    }

    const mapAllProjects = () => {
        return props.projectData.slice(0, 3).map((project) => {
            return (
                <Col xs={12} md={12} lg={12}>
                    <Project project={project}/>
                </Col>
            )
        })
    }

    const showMoreButton = () => {
            return buttonToggle ? null : <Button onClick={handleShowMoreProjects}>Load More</Button>
    }

    return (
        <Container id={props.header}>
            <div className="empty"/>

            <Row> 
                <Col xs={{spand:12, order: 1}} md={{ span: 12, order: 1}} lg={{ span:12, order: 1}}>
                    <h2 className="text-center">{props.header}</h2>
                </Col>
                <br />
            </Row>
            <Row>
                {mapAllProjects()}
            </Row>
            <div style={buttonStyle}>
                {showMoreButton()}
            </div>
            <Collapse in={buttonToggle} > 
                <Row>
                    {mapMoreProjects()}
                </Row>
            </Collapse>
            {/* <Row>
                {mapMoreProjects()}
            </Row> */}
        </Container>
    )
}

export default ProjectsContainer; 