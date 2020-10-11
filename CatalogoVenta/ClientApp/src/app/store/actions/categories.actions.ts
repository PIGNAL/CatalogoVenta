import { createAction, props } from '@ngrx/store';
import { ICategory } from '../../interface/category';

export const getCategories = createAction('[Category] Get Categories');

export const getCategoriesSuccess = createAction('[Category] Get Categories Success',
                                                    props<{categories: ICategory[]}>());

export const getCategoriesError = createAction('[Category] Get Categories Error',
                                                    props<{payload: any}>());

