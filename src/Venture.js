import React, {Component} from 'react';
import PropTypes from "prop-types";
import './table.css'

class  Venture extends Component{

    render(){
        return(
            <tr>
                <td className="td">{this.props.venture.name}</td>
                <td className="td">{this.props.venture.device}</td>
                <td className="td">{ this.props.venture.image}</td>
            </tr>
        )
    }
}

Venture.propTypes = {
    venture: PropTypes.object.isRequired

}

Venture.defaultProps = {};

export default Venture