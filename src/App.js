import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import {
  Home,
  Società,
  Servizi,
  Certifcazioni,
  Lavori,
  Lavoro,
  Contatti,
  Error,
} from './pages'

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/società'>
          <Società />
        </Route>
        <Route exact path='/servizi'>
          <Servizi />
        </Route>
        <Route exact path='/lavori'>
          <Lavori />
        </Route>
        <Route exact path='/lavori/:id' children={<Lavoro />} />
        <Route exact path='/certificazioni'>
          <Certifcazioni />
        </Route>
        <Route exact path='/contatti'>
          <Contatti />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
