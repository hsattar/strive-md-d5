import { Component } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class SearchResults extends Component {

    
    render() {
        return (
            <>
                <h2 className='mx-3 my-3'>Showing {this.props.movies.Search.length} results for {this.props.searchQuery}</h2>
                <Row className="mx-1 mb-4 justify-content-center">
                {               
                    // !this.state.movies.Search === undefined && 
                    this.props.movies.Search.map(movie => (
                        <Col key={movie.imdbID} xs='12' sm='6' md='4' lg='3' className="mb-3">
                                <img src={movie.Poster} className="w-100 img-fluid rounded images" alt="" />
                        </Col>
                    ))
                }
                </Row>
            </>
        )
    }
}

export default SearchResults