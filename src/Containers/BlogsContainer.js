import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Project from '../Components/Project'
import blogData from '../fillData/blogData.js'
import Card from 'react-bootstrap/Card'




function BlogsContainer() {

    const mapAllProjects = () => {
        return blogData.map((project) => {
            return (
                <Col xs={12} md={12} lg={12}>
                    <Project project={project}/>
                </Col>
            )
        })
    }

    return (
        <Container id="Blogs">
            <Row>
                <div className="empty"/>
            </Row>
            <Row> 
                <Col xs={{spand:12, order: 1}} md={{ span: 12, order: 1}} lg={{ span:12, order: 1}}>
                    <Card >
                        <Card.Text as="h3" className="text-center">Recent Blogs</Card.Text>
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

export default BlogsContainer; 