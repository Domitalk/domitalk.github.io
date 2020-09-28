import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Project from '../Components/Project'
import projectData from '../fillData/projectData.js'
// import Card from 'react-bootstrap/Card'

function ProjectsContainer() {
    const [projectsToShow, setProjectsToShow] = useState([])
    const [count, setCount] = useState(1)

    const buttonStyle = {
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"
    }

    useEffect(() => {
        setProjectsToShow(projectData.slice(0, 3))
    }, [])

    const handleShowMoreProjects = () => {
        const newSliceEnd = (count * 3) + 3
        setProjectsToShow(
            projectData.slice(0, newSliceEnd)
        )
        setCount(count + 1)
    }

    const mapAllProjects = () => {
        return projectsToShow.map((project) => {
            return (
                <Col xs={12} md={12} lg={12}>
                    <Project project={project}/>
                </Col>
            )
        })
    }

    return (
        <Container id="Projects">
            <Row>
                <div className="empty"/>
            </Row>
            <Row> 
                <Col xs={{spand:12, order: 1}} md={{ span: 12, order: 1}} lg={{ span:12, order: 1}}>
                    <h3 className="text-center">Projects</h3>

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
                <Button onClick={handleShowMoreProjects}>
                    Load More
                </Button>
            </div>
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