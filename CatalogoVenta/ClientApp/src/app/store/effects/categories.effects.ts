import { Inject, Injectable } from '@angular/core';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { ICategory } from '../../interface/category';
import { getCategoriesError, getCategoriesSuccess, getCategories } from '../actions/categories.actions';

@Injectable()
export class CategoriesEffects {


    constructor(private actions$: Actions,
                private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
                }

    getProducts$ = createEffect(
        () => this.actions$.pipe(
            ofType(getCategories),
            mergeMap(
                () => this.http.get<ICategory[]>(this.baseUrl + 'api/category/')
                      .pipe(
                            map(categories => {
                               return getCategoriesSuccess({categories: categories});
                            }),
                            catchError(error => of(getCategoriesError({payload: error})))
                       )
            )
        )
    );
}
