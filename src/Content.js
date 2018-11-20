import React from 'react'
import Search from './Search'
import AssetUpload from './AssetUpload'
import './Content.css'

export default({visiableView})=>(
    <div className="article">
       {visiableView === "Search" && <Search/>}
       {visiableView === "AssetUpload" && <AssetUpload/>}
       {/* {visiableView === "CreateEdit" && <CreateEdit/>} */}
    </div>
  );