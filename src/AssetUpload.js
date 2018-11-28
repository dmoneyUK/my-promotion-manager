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

    const item2 = <Item message="JackpotJoy" />;
    const item3 = <Item message="HeartBingo" />;
    const allTheThings = [item2, item3];

    return (
      <div className="AssetUpload">
        <h2>AssetUpload</h2>
        <form className="asset_upload_form">
          <label>
            Name:
            <input type="text" name="name" />
          </label>

          <div>
            <ItemList allItems={allTheThings}/>
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
