import './App.css';
import List from './Components/List';

import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <> 
        <nav className='navbar d-flex justify-content-md-center bg-light'>
          <a className='navbar-brand' href='#'>Employee Viewer</a>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Filter" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Filter</button>
          </form>
        </nav>
        <div className='container'>
          <List />
        </div>
      </>
    )
  }
}
