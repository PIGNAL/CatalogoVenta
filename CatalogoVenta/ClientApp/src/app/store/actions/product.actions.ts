import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../interface/product';

export const getProduct = createAction('[Product] Get Product',
                                        props<{id: number}>());

export const getProductSuccess = createAction('[Product] Get Product Success',
                                                    props<{product: IProduct}>());

export const getProductError = createAction('[Product] Get Product Error',
                                                    props<{payload: any}>());

