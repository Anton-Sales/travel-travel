import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap'
import './News.css'

export default class News extends Component {
    render() {
        return (
            <div>
                <Image src="assets/sunset.jpg" className="header-image" />
                <Grid>
                    <h2>News</h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-section">
                        <p>bob ross bob ross bob ross bob ross bob ross</p>
                        <p>bob ross bob ross bob ross bob ross bob ross</p>
                        <p>bob ross bob ross bob ross bob ross bob ross</p>
                        <p>bob ross bob ross bob ross bob ross bob ross</p>
                        </Col>
                        <Col xs={12} sm={4} className="sidebar-section">
                        <Image src="assets/person-3.jpg" />
                        <p>bob ross bob ross bob ross bob ross bob ross</p>
                        <p>bob ross bob ross bob ross bob ross bob ross</p>
                        <p>bob ross bob ross bob ross bob ross bob ross</p>
                        </Col>
                        </Row>
                    </Grid>
            </div>
        )
    }
}