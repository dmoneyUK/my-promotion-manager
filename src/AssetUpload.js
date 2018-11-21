import React, { Component } from 'react';
import './AssetUpload.css'
import Item from './Item'
import ItemList from './ItemList'

class AssetUpload extends Component{
  constructor(){
    super()
    this.state = {
      selectedFile: null,
      loaded: 0 
    }
  }

  handleSelectFile = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded :0
    })
  }

  handleUpload = () => {
    const data = new FormData()
    data.append('file', this.state.selectedFile, this.state.selectedFile.name)

    console.log("File uploaded")
  }
  
  handleChange() {
      this.props.onUserInput(
        this.refs.filterTextInput.value,
        this.refs.inStockOnlyInput.checked
      );
    }

  render() {

    let item2 = <Item message="a new message" />;
    let item3 = <Item message="another message" />;
    let item4 = <Item message="one more task" />;
    let allTheThings = [item2, item3, item4];

    return (
      <div className="AssetUpload">
        <h2>AssetUpload</h2>
        <form className="asset_upload_form">
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" className="asset_upload_button"/>
          <input type="submit" value="Reset" className="asset_upload_button"/>

          <div>
            <ItemList allItems={allTheThings}/>
            <br />
            <br />
            <br />
            {/* <ItemCount count={allTheThings.length} /> */}
            <hr />
          </div>
        </form>
        <div>
          <textarea className="asset_upload_textarea">
            Asset upload URL: http://my-poromotion-manager
          </textarea>
        </div>


        <input type="file" name="" id="" onChange={this.handleselectedFile} />
        <button onClick={this.handleUpload}>Upload</button>
        <div> {Math.round(this.state.loaded, 2)} %</div>
      </div>
    )
  }

}

export default AssetUpload;
