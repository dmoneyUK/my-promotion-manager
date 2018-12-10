import React, {Component} from 'react'
import Promotion from './Promotion.js'
import PropTypes from "prop-types"

class PromotionList extends Component{
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
        const filteredPromotions = this.props.promotions.filter(
            (promotion) => {
                return promotion.name.toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1;
            }
        );
        return(
            <div>
                <input type="text" id="query" value={this.state.query} onChange={this.handleInput}/>
                <ul/>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Device</th>
                            <th>Image</th>
                        </tr>
                        
                        {filteredPromotions.map((promotion)=>{
                            return <Promotion promotion={promotion} key={promotion.name}/>;
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

}

PromotionList.propTypes = {

    ventures: PropTypes.array
}

PromotionList.defaultProps = {};

export default PromotionList