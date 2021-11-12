import { Spinner } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'

const MySpinner = () => (
        <Row className='justify-content-center'>
            <Spinner animation="border" variant="danger"  className='mx-2'/>
        </Row>
    )

export default MySpinner