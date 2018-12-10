import React, {Component} from 'react';
import PropTypes from "prop-types";
import './table.css'

class Promotion extends Component{

    render(){
        return(
            <tr>
                <td className="td">{this.props.promotion.name}</td>
                <td className="td">{this.props.promotion.device}</td>
                <td className="td">{ this.props.promotion.image}</td>
            </tr>
        )
    }
}

Promotion.propTypes = {
    promotion: PropTypes.object.isRequired

}

Promotion.defaultProps = {};

export default Promotion