import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import ModalMovie from '../ModalMovie/ModalMovie'



function Movie({ ele }) {

const [cardInfo , setCardInfo] = useState({});
const [show ,setShow] = useState(false);
const handleClose = () => setShow(false)
    return (
        <>
                    <Card className='div-card'>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${ele.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{ele.title}</Card.Title>
                                <Card.Text>
                                    {ele.release_date}
                                </Card.Text>
                                <Card.Text>
                                    {ele.overview}
                                </Card.Text>
   
                                <div>
                                    <Button className='div-card-button' variant="primary"
                                        onClick={() =>{
                                            setCardInfo(ele)
                                            setShow(true)
                                    }}>Add To favorite</Button>
                                </div>
                            </Card.Body>
                        </Card>
            {
                < ModalMovie cardInfo={cardInfo} show={show} handleClose={handleClose} />
            }
        

        </>
    )
}

export default Movie;