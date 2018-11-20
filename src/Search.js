import React, { Component } from 'react';

class Search extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      list: [
        "Go to the store",
        "Wash the dishes",
        "Learn some code"
      ]
    }
  }

    handleChange() {
      this.props.onUserInput(
        this.refs.filterTextInput.value,
        this.refs.inStockOnlyInput.checked
      );
    }

    render() {
      return (
        <div className="content">
          <h2>Search</h2>
          <form>
            <input
              type="text"
              placeholder="Search..."
              value={this.props.filterText}
              ref="filterTextInput"
              onChange={this.handleChange}
            />
            <p>
              <input
                type="checkbox"
                checked={this.props.inStockOnly}
                ref="inStockOnlyInput"
                onChange={this.handleChange}
              />
              {' '}
                Only show products in stock
              </p>
            </form>
            <div className="container">
              <section className="section">
                <ul>
                  {this.state.list.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                  </ul>
                </section>
            </div>            
          </div>
        
      );
    }
  };

  export default Search;