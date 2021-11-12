import React from 'react'
import { Navbar, Nav, Form, } from 'react-bootstrap'
import { Col, Container, Row, FormControl, Button } from 'react-bootstrap'

class MyNavbar extends React.Component {

    state = {
        searchQuery: ''
    }

    render() {
        return (
<>
<Navbar bg="dark" expand="lg">
  <Navbar.Brand><a className="navbar-brand" href="#"><img class="netflix-logo" src="../assets/netflix_logo.png" alt=""/></a>Netflix</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      
    </Nav>
    <Form inline>
      <FormControl 
      type="text"
      placeholder="Search here"
      value={this.state.searchQuery}
      onChange={e => this.setState({ searchQuery: e.target.value })} />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</>









/* <Container>
<Row>
    <Col>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Search</Form.Label>
            <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={e => this.setState({ searchQuery: e.target.value })}
            />
        </Form.Group>
    </Col>
</Row>
<Row>
    {
        this.props.books.filter(b => b.title.toLowerCase().includes(this.state.searchQuery)).map(b => (
            <Col xs={3} key={b.asin} >
                <SingleBook book={b} />
            </Col>
        ))
    }
</Row>
</Container> */
)
}

}





export default MyNavbar