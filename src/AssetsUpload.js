import React, { Component } from 'react';

class AssetsUpload extends Component{
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
      <div className="AssetsUpload">
        <input type="file" name="" id="" onChange={this.handleselectedFile} />
        <button onClick={this.handleUpload}>Upload</button>
        <div> {Math.round(this.state.loaded, 2)} %</div>
      </div>
    )
  }

}

export default AssetsUpload;
