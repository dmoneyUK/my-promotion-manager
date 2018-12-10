import React from 'react'
import Search from './Search/Search'
import AssetUpload from './AssetUpload/AssetUpload'
import PromotionEditor from './PromotionEditor/PromotionEditor'
import './Content.css'

export default({visiableView})=>(
    <div className="article">
       {visiableView === "Search" && <Search/>}
       {visiableView === "AssetUpload" && <AssetUpload/>}
       {visiableView === "PromotionEditor" && <PromotionEditor/>}
    </div>
  );