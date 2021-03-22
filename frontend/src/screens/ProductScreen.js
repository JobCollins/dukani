import React, { Component } from 'react'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import axios from 'axios'

export default class ProductScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
        }
    }
    

    async componentDidMount(){
        const { data } = await axios.get(`/api/products/${this.props.match.params.id}`)
        // console.log(data);
        this.setState( {product: data} )
    }


    render() {
        const { match } = this.props
        // const product = product.find((p) => p._id === match.params.id)
        return (
            <>
                <Link className = 'btn btn-dark my-3'to='/'> 
                    Go Back
                </Link>
                <Row>
                    <Col md={6}>
                        <Image src={this.state.product.image} alt={this.state.product.name} fluid/>
                    </Col>
                    <Col md={3}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>{this.state.product.name}</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={this.state.product.rating} text={`${this.state.product.numReviews} reviews`}/>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price: ${this.state.product.price}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description: {this.state.product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Price: 
                                        </Col>
                                        <Col>
                                            <strong>${this.state.product.price}</strong> 
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Status: 
                                        </Col>
                                        <Col>
                                            <strong>{this.state.product.countInStock > 0
                                            ? 'In Stock'
                                            : 'Out of Stock'}</strong> 
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button className='btn-black' type='button' disabled={this.state.product.countInStock === 0}>
                                        Add to Cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </>
        )
    }
}
