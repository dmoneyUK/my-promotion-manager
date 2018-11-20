import React, { Component } from 'react';
import "./AssetUpload.css"

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
    return (
      <div className="AssetUpload">
        <h2>AssetUpload</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
          <br/>
          <label>
            Is going:
            <input
              name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
        </form>
        {/* <input type="file" name="" id="" onChange={this.handleselectedFile} />
        <button onClick={this.handleUpload}>Upload</button>
        <div> {Math.round(this.state.loaded, 2)} %</div> */}
        <div>
          <textarea>
            Asset upload URL: http://my-poromotion-manager
          </textarea>
        </div>
      </div>
    )
  }

}

export default AssetUpload;
