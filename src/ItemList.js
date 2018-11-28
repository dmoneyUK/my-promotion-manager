import React,{Component} from "react"
import PropTypes from "prop-types";

class ItemList extends Component{

    render(){
        let items = this.props.allItems.map(thing => thing);
        return (
            <h4>{items}</h4>
        );
    }
}

ItemList.propTypes = {
    allItems: PropTypes.array
  };
  
ItemList.defaultProps = {};
  
export default ItemList;