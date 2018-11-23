import React, { Component } from 'react';
import VentureLists from './VentureList';
import './table.css'

let ventures = [
  {name:"JackpotJoy", device: "desktop", image:"No Image"},
  {name:"HeartBingo", device: "mobile", image:"No Image"}
]

class Search extends Component {


  render(){
    return (
      <div>
        <h3>Search Ventures</h3>
        <label htmlFor="query">Filter by name: </label>
        <VentureLists ventures={ventures}/>
      </div>
    )
  }
 }

  export default Search;