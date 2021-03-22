import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <Container>
                    <Row>
                        <Col className='text-center py-3'>
                            Copyright &copy; dukani
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}
