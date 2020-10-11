import { createReducer, on } from '@ngrx/store';
import { IProduct } from 'src/app/interface/product';
import { getProduct, getProductError, getProductSuccess } from '../actions/product.actions';

export interface ProductState {
    id: number;
    product: IProduct;
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const productInitialState: ProductState = {
    id: null,
    product: null,
    loaded: false,
    loading: false,
    error: null
};

const _productReducer = createReducer(productInitialState,

    on(getProduct, (state, {id}) => ({
        ...state,
        loading: true,
        id
    })),
    on(getProductSuccess, (state, {product}) => ({
        ...state,
        loading: false,
        loaded: true,
        ...product
   })),
on(getProductError, (state, {payload}) => ({
       ...state,
       loading: false,
       loaded: false,
       error: {
           url: payload.url,
           name: payload.name,
           message: payload.message
       }
  })),

);

export function productReducer(state, action) {
    return _productReducer(state, action);
}
