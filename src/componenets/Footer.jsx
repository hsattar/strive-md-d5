import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import FooterLinks from './FooterLinks'

const Footer = () => {

    const links1 = ['Audio & Subtitles', 'Media Center', 'Privacy', 'Contact Us']
    const links2 = ['Audio Description', 'Investor Relations', 'Legal Notices']
    const links3 = ['Help Centre', 'Jobs', 'Cookie Preferences']
    const links4 = ['Gift Cards', 'Terms Of Use', 'Corporate Information']

    
    return (
        <Container className="mt-5">

            <Row className="social-icons">
                <i className="bi bi-facebook mx-3"></i>
                <i className="bi bi-instagram mx-3"></i>
                <i className="bi bi-twitter mx-3"></i>
                <i className="bi bi-youtube mx-3"></i>
            </Row>

            <Row className="mt-3">
                
                <FooterLinks text={links1} />
                <FooterLinks text={links2} />
                <FooterLinks text={links3} />
                <FooterLinks text={links4} />

                <Col xs='12' className="mt-3">
                    <Button variant='dark' className="transparent-btn">Service Code</Button>
                </Col>

                <Col xs='12' className="mt-3">
                    <p className="copyright">&copy; 1997-2019 Netflix, inc.</p>
                </Col>

            </Row>

        </Container>
    )
}

export default Footer