import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }

    async componentDidMount(){
        const { data } = await axios.get('/api/products')

        this.setState( {products: data} )
    }

    render() {
        return (
            <>
              <h1>Latest Products</h1>
              <Row>
                  {this.state.products.map((product) => (
                      <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                          <Product product={product}/>
                       </Col>
                  ))}
              </Row>  
            </>
        )
    }
}
