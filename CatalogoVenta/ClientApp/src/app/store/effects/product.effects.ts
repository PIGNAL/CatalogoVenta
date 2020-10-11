import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { getProduct, getProductSuccess, getProductError } from '../actions/product.actions';
import { IProduct } from '../../interface/product';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductEffects {
    constructor(private actions$: Actions,
                private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {}

    getProduct$ = createEffect(
        () => this.actions$.pipe(
            ofType(getProduct),
            mergeMap(
                (action) => this.http.get<IProduct>(`${this.baseUrl}api/category/${action.id}`)
                .pipe(
                    map(product => getProductSuccess({product})),
                    catchError(err => of(getProductError({payload: err})))
                )
            )
        )
    );

}
