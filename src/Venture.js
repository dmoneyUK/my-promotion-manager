import React, {Component} from 'react';
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

export default Venture