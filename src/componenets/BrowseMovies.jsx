import { Component } from "react"
import MovieRow from "./MovieRow"
import Loading from './Loading'


class BrowseMovies extends Component {
  state = {
      movies: null,
      movies2: null,
      movies3: null,
      isLoading: true

  };

  fetchMovies = async (query, updateMovie) => {

    let url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${query}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (response.ok) {
        this.setState(
           {
            [updateMovie]: data.Search
          }
        )
        this.setState({isLoading: false})
      } else {
        this.setState({isLoading: false})
      }
    } catch (e) {
      console.log(e)
      this.setState({isLoading: false})
    }
  }

  componentDidMount = async () => {
    this.fetchMovies('harry%20potter', 'movies')
    this.fetchMovies('home%20alone', 'movies2')
    this.fetchMovies('marvel', 'movies3')
  }

  render() {
    return (
      <>

        { this.state.isLoading &&  <Loading /> }
        { this.state.movies && <MovieRow movies={this.state.movies}/> }
        { this.state.movies2 && <MovieRow movies={this.state.movies2}/> }
        { this.state.movies3 && <MovieRow movies={this.state.movies3}/> }
      </>
    );
  }
}

export default BrowseMovies;