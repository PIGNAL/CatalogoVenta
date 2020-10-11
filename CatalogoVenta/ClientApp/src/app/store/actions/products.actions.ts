import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../interface/product';

export const getProducts = createAction('[Products] Get Products');

export const getProductsSuccess = createAction('[Products] Get Products Success',
                                                    props<{products: IProduct[]}>());

export const getProductsError = createAction('[Products] Get Products Error',
                                                    props<{payload: any}>());

export const getProductsByCategoryId = createAction('[Products] Get Products by CategoryId',
                                                    props<{id: number}>());
