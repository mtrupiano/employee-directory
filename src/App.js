import './App.css';
import List from './Components/List'

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <> 
        <nav className='navbar bg-light'>
          <a className='navbar-brand' href='#'>Employee Viewer</a>
        </nav>
        <div className='container'>
          <List />
        </div>
      </>
    )
  }
}
