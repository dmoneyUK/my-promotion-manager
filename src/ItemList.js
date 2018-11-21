import React,{Component} from "react"

class ItemList extends Component{
    constructor(props){
        super();
    }

    render(){
        let items = this.props.allItems.map(thing => thing);
        return (
            <h4>{items}</h4>
        );
    }
}

export default ItemList;