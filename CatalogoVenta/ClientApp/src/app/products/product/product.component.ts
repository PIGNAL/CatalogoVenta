import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { IProduct } from '../../interface/product';
import { getProduct } from '../../store/actions/product.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: IProduct;
  loading = false;
  error: any;

  constructor(private store: Store<AppState>,
              private router: ActivatedRoute) { }

  ngOnInit() {
    this.store.select('product').subscribe(({product, loading, error}) => {
      this.product = product;
      this.loading = loading;
      this.error = error;
    });

    this.router.params.subscribe(({id})=>{
      this.store.dispatch(getProduct({id}));
    });
  }

}
