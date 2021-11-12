import { Component } from 'react'
import Col from 'react-bootstrap/Col'

class FooterLinks extends Component {
    render() {
        return (
            <Col xs='12' sm='6' md='3'>  
                {
                    this.props.text.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))
                }
            </Col>
        )
    }   
}

export default FooterLinks