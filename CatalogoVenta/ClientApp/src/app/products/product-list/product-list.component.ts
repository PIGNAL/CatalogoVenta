import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProduct } from '../../interface/product';
import { AppState } from '../../store/app.reducers';
import { getProducts, getProductsByCategoryId } from '../../store/actions/products.actions';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: []
})
export class ProductListComponent implements OnInit {

  products: IProduct[] = [];
  loading = false;
  error: any;

  constructor(private store: Store<AppState>,
              private router: ActivatedRoute,
              private route: Router) { }

  ngOnInit() {
    this.store.select('products').subscribe(({products, loading, error}) => {
      this.products = products;
      this.loading = loading;
      this.error = error;
    });

    this.router.params.subscribe(({id}) => {
      if (!id) {
        this.store.dispatch(getProducts());
      } else {
        console.log('llego getProductsBycategory');
        this.store.dispatch(getProductsByCategoryId({id}));
      }
    });
  }

  onProductClick(id: number) {
    this.route.navigate(['/product', id]);
  }

}
