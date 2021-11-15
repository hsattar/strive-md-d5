import Card from 'react-bootstrap/Card'
import MySpinner from './MySpinner'

const LoadingCard = () => {
    
    return (
        <Card bg='dark' className='loading-card'>
            <Card.Body className='d-flex justify-content-center align-items-center'>
                <MySpinner />
            </Card.Body>
        </Card>
    )

}   

export default LoadingCard