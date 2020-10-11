import { Inject, Injectable } from '@angular/core';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { getProducts, getProductsSuccess, getProductsError, getProductsByCategoryId } from '../actions/products.actions';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../../interface/product';

@Injectable()
export class ProductsEffects {


    constructor(private actions$: Actions,
                private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
                }

    getProducts$ = createEffect(
        () => this.actions$.pipe(
            ofType(getProducts),
            mergeMap(
                () => this.http.get<IProduct[]>(`${this.baseUrl}api/product/`)
                      .pipe(
                            map(products => {
                               return getProductsSuccess({products: products});
                            }),
                            catchError(error => of(getProductsError({payload: error})))
                       )
            )
        )
    );

    getProductsByCategoryId$ = createEffect(
        () => this.actions$.pipe(
            ofType(getProductsByCategoryId),
            mergeMap(
                (action) => this.http.get<IProduct[]>(`${this.baseUrl}api/category/${action.id}/products`)
                      .pipe(
                            map(products => {
                                console.log(products);
                               return getProductsSuccess({products: products});
                            }),
                            catchError(error => of(getProductsError({payload: error})))
                       )
            )
        )
    );
}
