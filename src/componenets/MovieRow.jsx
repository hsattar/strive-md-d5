import { Component } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


class MovieRow extends Component {
  state = {
      movies: null,
      movies2: null,
      movies3: null

  };

  fetchMovies = async () => {

    let url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=harry%20potter`
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (response.ok) {
        this.setState(
           {
            movies: data.Search
          }
        )
      } else {
      }
    } catch (e) {
      console.log(e);
    }
  }

  fetchMovies2 = async () => {

    let url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=home%20alone`
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (response.ok) {
        this.setState(
           {
            movies2: data.Search
          }
        )
      } else {
      }
    } catch (e) {
      console.log(e);
    }
  }

  fetchMovies3 = async () => {

    let url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=christmas`
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (response.ok) {
        this.setState(
           {
            movies3: data.Search
          }
        )
      } else {
      }
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount = async () => {
    this.fetchMovies()
    this.fetchMovies2()
    this.fetchMovies3()
  }

  render() {
    return (
      <>
      { this.state.movies &&
       <Row className="mx-1 my-4 justify-content-center">
            {
                this.state.movies.map((movie, index) => (
                    index < 4 &&
                    <Col key={movie.imdbID} xs='12' sm='6' md='4' lg='3' className="mb-3">
                            <img src={movie.Poster} className="w-100 img-fluid rounded images" alt="" />
                    </Col>
                ))
            }
        </Row>
    }
          { this.state.movies2 &&
       <Row className="mx-1 my-4 justify-content-center">
            {
                this.state.movies2.map((movie, index) => (
                    index < 4 &&
                    <Col key={movie.imdbID} xs='12' sm='6' md='4' lg='3' className="mb-3">
                            <img src={movie.Poster} className="w-100 img-fluid rounded images" alt="" />
                    </Col>
                ))
            }
        </Row>
    }
          { this.state.movies3 &&
       <Row className="mx-1 my-4 justify-content-center">
            {
                this.state.movies3.map((movie, index) => (
                    index < 4 &&
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