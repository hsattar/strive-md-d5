import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import SearchResults from './SearchResults'

class MyNavbar extends React.Component {

    state = {
        searchQuery: '',
        showSearchresults: false,
        data: null
    }

    handleSubmit = async e => {
        e.preventDefault()
        const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${this.state.searchQuery}`)
        const data = await response.json()
        console.log(data)
        this.setState({data: data})
        this.setState({showSearchresults: true})
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
                                    type="text"
                                    placeholder="Search here"
                                    value={this.state.searchQuery}
                                    onChange={e => this.setState({ searchQuery: e.target.value })} 
                                />
                                <Button type="submit" variant="dark"><i className="bi bi-search mx-2"></i></Button>
                            </Form>
                        </div>

                    </div>
                
                </Navbar>

                {this.state.showSearchresults && <SearchResults movies={this.state.data} searchQuery={this.state.searchQuery}/>}
            </>
        )
    }
}





export default MyNavbar