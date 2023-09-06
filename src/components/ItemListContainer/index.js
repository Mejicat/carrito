import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


export default function ItemListContainer () {
    const [items, setItems] = useState ([])
    const {id} = useParams ()

    useEffect (() => {
        const getProducts = async () => {
            const response = await fetch ('/data/products.js')
            const products = await response.json ()
    
            const filteredProducts = products.filter(product => product.category === id)

            if (filteredProducts.length > 0) {
                setItems (filteredProducts)}
            else {
                setItems (products)
                 }
        }
        getProducts ()
    }, [id])

    return (
        <Container fluid className='mt-4'>
            <Row>
                {items.map (item => (
                    <Col key={item.id} lg={4} className= 'mb-4' >
                        <Card>
                            <Card.Img variant='top' src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                <Button as={Link} to={`/item/${item.id}`} variant='dark'>Ver más</Button>
                            </Card.Body>
                        </Card>
                    </Col>
            )
            )
            }
        </Row>
    </Container>
)
}