import { Component } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


class MovieRow extends Component {
    render() {
        return (
            <Row className="mx-1 my-4 justify-content-center">
                {
                    this.props.movies.map((movie, index) => (
                        index < 4 &&
                        <Col key={movie.imdbID} xs='12' sm='6' md='4' lg='3' className="mb-3">
                                <img src={movie.Poster} className="w-100 img-fluid rounded images" alt="" />
                        </Col>
                    ))
                }
            </Row>
        )
    }
}

export default MovieRow;