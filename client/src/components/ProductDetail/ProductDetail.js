import React, { useState } from "react";
import {connect} from 'react-redux';
import {formatMoney} from "../../pipes/priceFormatter";
import {addProductToCart} from "../../actions";

const ProductDetail = (props) => {

    const {
      uniq_id,
      product_name,
      retail_price,
      discounted_price,
      image,
      description,
      product_rating,
      overall_rating,
      brand,
    } = props.product;
  


    const onCart = () => {
        props.dispatch(addProductToCart(props.product));
    };

    return (
      <aside className="col-sm-7">
        <article className="card-body p-5">
          <h3 className="title mb-3">{product_name}</h3>

          <p className="price-detail-wrap">
            <span className="price h3 text-warning">
              <span className="currency">$</span>
              <span className="num">{formatMoney(discounted_price)}</span>
            </span>
          </p>
          <dl className="item-property">
            <dt>Description</dt>
            <dd>
              <p className="text-capitalize">{description}</p>
            </dd>
          </dl>
          <dl className="param param-feature">
            <dt>Brand</dt>
            <dd className="text-capitalize">{brand}</dd>
          </dl>


          {/* <dl className="param param-feature">
            <dt>Size</dt>
            <dd>{size}</dd>
          </dl>
          <dl className="param param-feature">
            <dt>Camera</dt>
            <dd>{camera}</dd>
          </dl>
          <dl className="param param-feature">
            <dt>CPU</dt>
            <dd>{cpu}</dd>
          </dl>
          <dl className="param param-feature">
            <dt>Memory</dt>
            <dd>{memory}</dd>
          </dl>
          <dl className="param param-feature">
            <dt>Display</dt>
            <dd>{display}</dd>
          </dl>
          <dl className="param param-feature">
            <dt>Battery</dt>
            <dd>{battery}</dd>
          </dl> */}
          <hr />
          <hr />
          <button
            onClick={onCart}
            className="btn btn-lg btn-outline-primary text-uppercase"
          >
            <i className="fa fa-shopping-cart" /> Add to cart
          </button>
        </article>
      </aside>
    );
};

export default connect()(ProductDetail);
