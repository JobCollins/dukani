import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <main className='py-3'>
        <Container>
          <h1>Karibu dukani</h1>
        </Container>
      </main>
      <Footer/>
      </>
    )
  }
}

