import Button from 'react-bootstrap/Button'

const HeroMovie = () => (
    <div className="hero-img-container">
    <img className="w-100 hero-img" src="../assets/hero-img.jpg" alt="" />
        <h1 className="movie-title">Horror Movie</h1>
        <Button className="btn-transparent hero-img-btn px-3" variant='dark'><i className="bi bi-play-fill mx-2"></i> Play</Button>
        <Button className="btn-transparent hero-img-btn2 px-3" variant='dark'><i className="bi bi-plus-lg mx-2"></i>My List</Button>
        <p className="movie-description">A Short Description About This Completely Made Up Movie. This Does Not Exist. 
        Maybe One Day Somebody will Turn This Into A Real Movie. I Hope That They Do. That Would Be Cool.</p>
    </div>
)

export default HeroMovie