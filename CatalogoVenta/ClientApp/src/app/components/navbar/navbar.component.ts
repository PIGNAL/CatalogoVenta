import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICategory } from '../../interface/category';
import { AppState } from '../../store/app.reducers';
import { getCategories } from '../../store/actions/categories.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categories: ICategory[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('categories').subscribe(({categories}) => {
      this.categories = categories;
    });

    this.store.dispatch(getCategories());
  }

}
