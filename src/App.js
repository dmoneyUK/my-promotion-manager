import React, { Component } from 'react';
import Menu from './Menu';
import Content from './Content';
import './App.css'


class App extends Component{

state = {visiableView: "Search"}

handleMenuChange = (value) =>{
  this.setState({
    visiableView: value
  })
}
  render() {
    return (
      <div>
        <header className="header">
          <h2>Promotion Manager</h2>
        </header>
        <div className="container">
          <Menu changeContent={this.handleMenuChange}/>
          <Content visiableView={this.state.visiableView}/>
        </div>
        <footer className="footer"/>
      </div>
    )
  }
}

export default App;
