import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class Product extends Component {
    render() {
        return (
            <Card className='my-3 p-3 rounded'>
                <a href={`.product/${this.props.product._id}`}>
                    <Card.Img src={this.props.product.image} variant='top' />
                </a>
                <Card.Body>
                <a href={`.product/${this.props.product._id}`}>
                    <Card.Title as='div'><strong>{this.props.product.name}</strong></Card.Title>
                </a>
                <Card.Text as='div'>
                    <div className='my-3'>
                        {this.props.product.rating} from {this.props.product.numReviews}
                    </div>
                </Card.Text>
                <Card.Text as='h3'>
                    ${this.props.product.price}
                </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
