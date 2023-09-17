import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { db } from "../../firebase/client";
import styles from './styles.module.css';
import { snapshot } from 'firebase/firestore';
import {getDocs, collection, query, where, getDoc, limit, doc} from 'firebase/firestore';


export default function ItemListContainer () {
    const [items, setItems] = useState ([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()
    // const {id} = useParams ()

    useEffect(() => {
        const getProducts = async () => {
          try {
            const productRef = collection(db, "products")

            let productQuery = query(productRef)

            if (category) {
              productQuery = query(productRef, where("category", "==", category))
            }

            const data = await getDocs(productQuery);
            const dataFiltrada = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setItems(dataFiltrada)
            setLoading(false)
          } catch (error) {
            console.error("Error fetching products:", error)
          }
        };
    
        getProducts()
      }, [category])
    
      if (loading) {
        return <p>Cargando...</p>
      }

    return (
        <Container fluid className='mt-4'>
            <Row>
                {items.map (item => (
                    <Col key={item.id} lg={4} className= 'mb-4' >
                        <Card>
                            <Card.Img variant='top' src={item.image} className={styles['imagen_item']} />
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

