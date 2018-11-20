import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AssetsUpload from './AssetsUpload';
import Menu from './Menu';
import './App.css'


class App extends Component{
  constructor(){
    super()
    this.state = {
      selectedFile: null,
      loaded: 0
    }
  }

  render() {
    return (
      <div>
        <header className="header">
          <h2>Promotion Manager</h2>
        </header>
        <Menu/>
        <SearchBar/>
        <AssetsUpload/>
        
      </div>
    )
  }
}

export default App;
