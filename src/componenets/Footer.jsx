import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Footer = () => (
    <Container className="mt-5">

        <Row className="social-icons">
            <i className="bi bi-facebook mx-3"></i>
            <i className="bi bi-instagram mx-3"></i>
            <i className="bi bi-twitter mx-3"></i>
            <i className="bi bi-youtube mx-3"></i>
        </Row>

        <Row className="mt-3">
            <Col xs='12' sm='6' md='3'>
                <p>Audio & Subtitles</p>
                <p>Media Center</p>
                <p>Privacy</p>
                <p>Contact Us</p>
            </Col>

            <Col xs='12' sm='6' md='3'>
                <p>Audio Description</p>
                <p>Investor Relations</p>
                <p>Legal Notices</p>
            </Col>

            <Col xs='12' sm='6' md='3'>
                <p>Help Centre</p>
                <p>Jobs</p>
                <p>Cookie Preferences</p>
            </Col>

            <Col xs='12' sm='6' md='3'>
                <p>Gift Cards</p>
                <p>Terms Of Use</p>
                <p>Corporate Information</p>
            </Col>

            <Col xs='12' className="mt-3">
                <Button className="transparent-btn">Service Code</Button>
            </Col>

            <Col xs='12' className="mt-3">
                <p className="copyright">&copy; 1997-2019 Netflix, inc.</p>
            </Col>

        </Row>

    </Container>
)

export default Footer