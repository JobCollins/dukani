import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <main className='py-3'>
        <Container>
          <HomeScreen/>
        </Container>
      </main>
      <Footer/>
      </>
    )
  }
}

