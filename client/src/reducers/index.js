import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';
import shop from "./shop.reducer";
import { brandFilterReducer } from "./brand.filter.reducer";
import { orderByPriceReducer } from "./orderByPrice.filter.reducer";
import { paginationReducer } from "./pagination.reducer";

export default combineReducers({
  shop,
  brandFilter: brandFilterReducer,
  orderBy: orderByPriceReducer,
  pagination: paginationReducer,
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer
});
