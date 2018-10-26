import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Col, Image } from 'react-bootstrap'
import './About.css'

export default class About extends Component {
  render () {
    return (
      <div>
        <Image src='assets/banner.jpg' className='header-image' />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src='assets/person-1.jpg' circle className='about-profile-pic' />
            <h3>tony the tony</h3>
            <p>hello this is an hello hello hello this is an hello hello hello this is an hello hello hello this is an hello hello</p>
          </Col>
        </Grid>
      </div>
    )
  }
}
