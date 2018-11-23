 import React from 'react';
 import './Menu.css'

 export default ({changeContent})=>(
   <div className="menu">
      <a href="#" onClick={() => changeContent("AssetUpload")}>AssetUpload</a>
      <a href="#" onClick={() => changeContent("Search")}>Search</a>
      <a href="#" onClick={() => changeContent("PromotionEditor")}>CreatEdit</a>
   </div>
 );
 
// import './Menu.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import SearchBar from './SearchBar';
// import AssetUpload from './AssetUpload';

// const Home = () => <h2>Home</h2>;
// const CreatingEditing = () => <h2>CreatingEditing</h2>;

// const AppRouter = () => (
//   <Router>
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/AssetUpload/">AssetUpload</Link>
//           </li>
//           <li>
//             <Link to="/Search/">Search</Link>
//           </li>
//           <li>
//             <Link to="/CreatingEditing/">CreatingEditing</Link>
//           </li>
//         </ul>
//       </nav>

//       <Route path="/" exact component={Home}/>
//       <Route path="/AssetUpload/" component={AssetUpload}/>
//       <Route path="/Search/" component={SearchBar}/>
//       <Route path="/CreatingEditing/" component={CreatingEditing}/>

//     </div>
//   </Router>
// );

// export default AppRouter;
