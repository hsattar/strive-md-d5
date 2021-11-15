import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import SearchResults from './SearchResults'
import HeroMovie from './HeroMovie'
import Footer from './Footer'
import SubHeading from './SubHeading'
import BrowseMovies from './BrowseMovies'
import Loading from './Loading'

class MyNavbar extends React.Component {

    state = {
        searchQuery: '',
        showSearchresults: false,
        data: null,
        isLoading: false
    }

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({isLoading: true})
        try {
            if (this.state.searchQuery.length === 0) {
                this.setState({showSearchresults: false})
                this.setState({isLoading: false})
            } 
            else {
                const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${this.state.searchQuery}`)
                const data = await response.json()
                this.setState({data: data})
                if (this.state.searchQuery) this.setState({showSearchresults: true})
                this.setState({isLoading: false})
            }
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand>
                    <a className="navbar-brand " href="/"><img className="netflix-logo" src="../assets/netflix_logo.png" alt=""/></a>
                    </Navbar.Brand>

                    <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="/">TV Shows<span className="sr-only">(current)</span></a></li>
                            <li className="nav-item active"><a className="nav-link" href="/">Movies</a></li>
                            <li className="nav-item"><a className="nav-link" href="/">Recently Added</a></li>
                            <li className="nav-item"><a className="nav-link" href="/">My List</a></li>
                        </ul>

                        <div className="form-inline my-2 my-lg-0">
                        
                            <span className="mx-2 profile-type">Kids</span>
                            <i className="bi bi-bell-fill mx-2"></i>
                            
                            <img className="drop-down-avatar mr-2" src="../assets/avatar.png" alt=""/>


                            <Form inline onSubmit={this.handleSubmit}>
                                <FormControl
                                    className='bg-dark text-white'
                                    type="text"
                                    placeholder="Search here"
                                    value={this.state.searchQuery}
                                    onChange={e => this.setState({ searchQuery: e.target.value })} 
                                />
                                {
                                    this.state.isLoading && 
                                    <Loading />
                                }
                                <Button type="submit" variant="dark"><i className="bi bi-search mx-2"></i></Button>
                            </Form>
                        </div>

                    </div>
                
                </Navbar>

                {this.state.showSearchresults && 
                    <SearchResults movies={this.state.data} searchQuery={this.state.searchQuery}/>
                }
                {
                    !this.state.showSearchresults &&      
                    <>
                        <HeroMovie />
                        <SubHeading />
                        <BrowseMovies />
                        <Footer />
                    </>
                }
            </>
        )
    }
}





export default MyNavbar