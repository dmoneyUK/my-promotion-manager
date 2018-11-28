import React, { Component } from 'react';
import VentureLists from './PromotionList';
import './table.css'

const promotions = [
  {name:"Promo-JackpotJoy", device: "desktop", image:"No Image"},
  {name:"Promo-HeartBingo", device: "mobile", image:"No Image"}
]

class Search extends Component {

  render(){
    return (
      <div>
        <h3>Search Promotions</h3>
        <label htmlFor="query">Filter by name: </label>
        <VentureLists promotions={promotions}/>
      </div>
    )
  }
 }

  export default Search;