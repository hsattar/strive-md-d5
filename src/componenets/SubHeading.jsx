import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'

const SubHeading = () => (
    <Container fluid>

        <Row className="pt-3">

            <Col xs='12' className="d-flex align-items-center justify-content-between px-4">

                <div className="left-headings d-flex align-items-center">
                    <h2 className="pl-0 pr-3">Movies</h2>
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            Genres
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='bg-dark'>
                            <Dropdown.Item href="#/action-1">Horror</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Comedy</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Romance</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            
                <div className=" d-none d-md-flex">
                    <i className="bi bi-list"></i>
                    <i className="bi bi-grid-3x2-gap"></i>
                </div>

            </Col>

        </Row>

    </Container>
)

export default SubHeading 