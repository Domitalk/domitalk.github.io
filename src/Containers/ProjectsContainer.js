import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Project from '../Components/Project'
import projectData from '../fillData/projectData.js'
// import Card from 'react-bootstrap/Card'

function ProjectsContainer(props) {
    const [projectsToShow, setProjectsToShow] = useState([])
    const [buttonToggle, setButtonToggle] = useState(true)

    const buttonStyle = {
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"
    }

    const handleShowMoreProjects = () => {
        setProjectsToShow(props.projectData.slice(3))
        setButtonToggle(false)
    }

    const mapMoreProjects = () => {
        return projectsToShow.map((project => {
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
            return buttonToggle ? <Button onClick={handleShowMoreProjects}>Load More</Button> : null
    }

    return (
        <Container id="Projects">
            <Row>
                <div className="empty"/>
            </Row>
            <Row> 
                <Col xs={{spand:12, order: 1}} md={{ span: 12, order: 1}} lg={{ span:12, order: 1}}>
                    <h3 className="text-center">{props.header}</h3>

                    {/* <Card >
                        <Card.Text as="h3" className="text-center">Recent Projects</Card.Text>
                    </Card> */}
                </Col>
            </Row>
            {/* <Row>
                <div className="empty"/>
            </Row> */}
            <Row>
                {mapAllProjects()}
            </Row>
            <div style={buttonStyle}>
                {showMoreButton()}
            </div>
            <Row>
                {mapMoreProjects()}
            </Row>
        </Container>
    )
}

export default ProjectsContainer; 





// import React from 'react'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Project from '../Components/Project'
// import projectData from '../fillData/projectData.js'
// import Card from 'react-bootstrap/Card'




// function ProjectsContainer() {

//     const mapAllProjects = () => {
//         return projectData.map((project) => {
//             return (
//                 <Col xs={12} md={12} lg={12}>
//                     <Project project={project}/>
//                 </Col>
//             )
//         })
//     }

//     return (
//         <Container id="Projects">
//             <Row>
//                 <div className="empty"/>
//             </Row>
//             <Row> 
//                 <Col xs={{spand:12, order: 1}} md={{ span: 12, order: 1}} lg={{ span:12, order: 1}}>
//                     <Card border="secondary">
//                         <Card.Text className="text-center">Recent Projects</Card.Text>
//                     </Card>
//                 </Col>
//             </Row>
//             <Row>
//                 <div className="empty"/>
//             </Row>
//             <Row>
//                 {mapAllProjects()}
//             </Row>
//         </Container>
//     )
// }

// export default ProjectsContainer; 