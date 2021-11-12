import { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class MovieRow extends Component {
  state = {
      movies: null

  };

  fetchMovies = async () => {

    let url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=harry%20potter`;
    try {
      const response = await fetch(url);

      const data = await response.json();
      console.log(data)
      console.log("right after the fetch");

      if (response.ok) {
        this.setState(
           {
            movies: data.Search
          }
        )
        console.log(this.state.movies.Search);
      } else {
        console.log("inside the else of Fetch"); 
      }
    } catch (e) {
      console.log(e);
      console.log("outside the try block");
    }
  };

  componentDidMount = async () => {
    this.fetchMovies();

  };

  render() {
    return (
      <>
      { this.state.movies &&
       <Row className="mx-1 mb-4 justify-content-center">
                {
                    this.state.movies.map(movie => (
                        <Col key={movie.imdbID} xs='12' sm='6' md='4' lg='3' className="mb-3">
                                <img src={movie.Poster} className="w-100 img-fluid rounded images" alt="" />
                        </Col>
                    ))
                }
                </Row>
  }
      </>
    );
  }
}

export default MovieRow;