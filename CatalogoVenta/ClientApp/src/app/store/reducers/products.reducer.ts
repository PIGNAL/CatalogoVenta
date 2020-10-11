import { createReducer, on } from '@ngrx/store';
import { IProduct } from 'src/app/interface/product';
import { getProducts, getProductsError, getProductsSuccess, getProductsByCategoryId } from '../actions/products.actions';

export interface ProductsState {
    products: IProduct[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const productsInitialState: ProductsState = {
    products: [],
    loaded: false,
    loading: false,
    error: null
};

const _productsReducer = createReducer(productsInitialState,

    on(getProducts, state => ({ ...state, loading: true})),
    on(getProductsSuccess, (state, {products}) => ({
             ...state,
             loading: false,
             loaded: true,
             products: [...products]
        })),
    on(getProductsError, (state, {payload}) => ({
            ...state,
            loading: false,
            loaded: false,
            error: {
                url: payload.url,
                name: payload.name,
                message: payload.message
            }
       })),
       on(getProductsByCategoryId, (state, { id }) => ({
           ...state,
           loading: true,
           id,
       }))

);

export function productsReducer(state, action) {
    return _productsReducer(state, action);
}
