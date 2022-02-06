import React from "react";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "../category/category.component";
//import { connect } from 'react-redux';
//import { createStructuredSelector } from "reselect";

//import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

//import { selectCollections } from "../../redux/shop/shop.selectors.js";

//const ShopPage = ({ match }) => {
//  console.log(match);
//  return (
//    <div className="shop-page">
//      <Routes>
//        <Route path={`${match.path}`} element={<CollectionsOverview/>} />
//      </Routes>
//    </div>
//  );
//};
const ShopPage = () => {
  //console.log();
  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionsOverview />} />
        <Route path=":categoryId" element={<CategoryPage />} />
      </Routes>
    </div>
  );
};
//const mapStateToProps = createStructuredSelector({
//  collections: selectCollections,
//});

export default ShopPage;
//<Route path=":categoryId" element={<CategoryPage />} />
