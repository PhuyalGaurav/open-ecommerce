import { React, useState, useEffect } from 'react'
import { Link, useParams  } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import Axios from 'axios'

function ProductScreen({ match }) {
    const params = useParams();
    const [product, setProduct ] = useState([])
    useEffect( () => {
      async function fetchProducts() {
        console.log(params);
        const { data } = await Axios.get(`/api/products/${params.id}`)
        setProduct( data )
      }
  
      fetchProducts()
    },[])
    const { id } = useParams();
    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price : ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description :  {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroup >
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price :</Col>
                                    <Col><strong>${product.price}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                        <ListGroup.Item>
                                <Row>
                                    <Col>Status :</Col>
                                    <Col><strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'} ({product.countInStock}) </strong></Col>
                                </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className='col-md-12 text-center'>
                            <Button className='btn btn-lg btn-block' type='button' disabled = {product.countInStock === 0} >Add to cart</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

            </Row>
        </div>
    )
}

export default ProductScreen