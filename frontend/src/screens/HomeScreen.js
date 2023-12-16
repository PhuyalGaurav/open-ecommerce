import { React, useState, useEffect } from 'react'
import { Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import Axios from 'axios'

function HomeScreen() {
  const [products, setProducts ] = useState([])
  useEffect( () => {
    async function fetchProducts() {
      const { data } = await Axios.get('/api/products')
      setProducts( data )
    }

    fetchProducts()
  },[])
  return (
    <div>
        <h1>Latest products</h1>
        <Row>
            {products.map(product => (
                <Col key={product._id}sm={12} md={4} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen