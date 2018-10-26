import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import './Home.css'

export default class Home extends Component {
  render () {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to travel travel</h2>
          <p>the beginning of travel travel</p>
          <Link to='/about'>
            <Button bsStyle='primary'>About</Button>
          </Link>
        </Jumbotron>
        <Row className='show-grid text-center'>
          <Col xs={12} sm={4} className='person-wrapper'>
            <Image src='assets/person-4.jpg' circle className='profile-pic' />
            <h3>Tony</h3>
            <p>hello hello hello hello</p>
          </Col>
          <Col xs={12} sm={4} className='person-wrapper'>
            <Image src='assets/person-2.jpg' circle className='profile-pic' />
            <h3>Tony</h3>
            <p>hello hello hello hello</p>
          </Col>
          <Col xs={12} sm={4} className='person-wrapper'>
            <Image src='assets/person-3.jpg' circle className='profile-pic' />
            <h3>Tony</h3>
            <p>hello hello hello hello</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}
