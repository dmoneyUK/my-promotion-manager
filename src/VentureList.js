import React, {Component} from 'react'
import Venture from './Venture.js'
import PropTypes from "prop-types"

class VentureList extends Component{
    constructor(props){
        super(props);
        this.state = {
          query: '',
    
        }
      }
    
    handleInput = e => {
        this.setState({query: e.target.value})
    }

    render(){
        let filteredVentures = this.props.ventures.filter(
            (venture) => {
                return venture.name.toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1;
            }
        );
        return(
            <div>
                <input type="text" id="query" value={this.state.query} onChange={this.handleInput}/>
                <ul/>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Venture</th>
                            <th>Device</th>
                            <th>Image</th>
                        </tr>
                        
                        {filteredVentures.map((venture)=>{
                            return <Venture venture={venture} key={venture.name}/>;
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

}

VentureList.propTypes = {

    ventures: PropTypes.array
}

Venture.defaultProps = {};

export default VentureList