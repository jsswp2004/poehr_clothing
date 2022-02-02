import React from "react";
//import { connect } from 'react-redux';
//import { createStructuredSelector } from "reselect";

//import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

//import { selectCollections } from "../../redux/shop/shop.selectors.js";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    <CollectionsOverview />
  </div>
);

//const mapStateToProps = createStructuredSelector({
//  collections: selectCollections,
//});

export default ShopPage;
