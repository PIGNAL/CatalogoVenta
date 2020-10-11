import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
   products: reducers.ProductsState;
   categories: reducers.CategoriesState;
   product: reducers.ProductState;
}



export const appReducers: ActionReducerMap<AppState> = {
   products: reducers.productsReducer,
   categories: reducers.categoriesReducer,
   product: reducers.productReducer
};
