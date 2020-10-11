import { createReducer, on } from '@ngrx/store';
import { ICategory } from '../../interface/category';
import { getCategories, getCategoriesSuccess, getCategoriesError } from '../actions/categories.actions';

export interface CategoriesState {
    categories: ICategory[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const categoriesInitialState: CategoriesState = {
    categories: [],
    loaded: false,
    loading: false,
    error: null
};

const _categoriesReducer = createReducer(categoriesInitialState,

    on(getCategories, state => ({ ...state, loading: true})),
    on(getCategoriesSuccess, (state, {categories}) => ({
             ...state,
             loading: false,
             loaded: true,
             categories: [...categories]
        })),
    on(getCategoriesError, (state, {payload}) => ({
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

export function categoriesReducer(state, action) {
    return _categoriesReducer(state, action);
}
