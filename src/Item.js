import React,{ Component } from 'react'

class Item extends Component{

    constructor(props){
        super();
        this.state = {checked:false}
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(e){
        this.setState({
            checked: !this.state.checked
        });
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <input type="checkbox" checked={this.state.checked} onClick={this.handleClick}/>&nbsp;{this.props.message}
                </div>
            </div>
        )

    }
}

export default Item;