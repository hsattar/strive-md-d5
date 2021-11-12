import React from 'react'
import { Navbar, Nav, Form, NavItem } from 'react-bootstrap'
import { Col, Container, Row, FormControl, Button } from 'react-bootstrap'

class MyNavbar extends React.Component {

    state = {
        searchQuery: ''
    }

    render() {
        return (

<Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand>
    <a className="navbar-brand " href="#"><img className="netflix-logo" src="../assets/netflix_logo.png" alt=""/></a>
    </Navbar.Brand>

    <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">TV Shows<span class="sr-only">(current)</span></a></li>
            <li className="nav-item active"><a className="nav-link" href="#">Movies</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Recently Added</a></li>
            <li className="nav-item"><a className="nav-link" href="#">My List</a></li>
        </ul>

        <div className="form-inline my-2 my-lg-0">
        
        <span className="mx-2 profile-type">Kids</span>
        <i className="bi bi-bell-fill mx-2"></i>
        
        <img className="drop-down-avatar mr-2" src="../assets/avatar.png" alt=""/>


    <Form inline>
      <FormControl 
      type="text"
      placeholder="Search here"
      value={this.state.searchQuery}
      onChange={e => this.setState({ searchQuery: e.target.value })} />
      <Button variant="dark"><i className="bi bi-search mx-2"></i></Button>
    </Form>
        </div>

    </div>
  
</Navbar>










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