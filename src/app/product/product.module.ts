import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductHomeComponent } from './components/product-home/product-home.component';

import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import { ProductService } from './services/product.service';
import { FormsModule} from "@angular/forms"; //used for databinding in forms -- formspecific components
                                              //also written in app.module as each module is different
import { SaveAlertGaurdService } from './guards/save-alert-gaurd.service';
import { AuthGuard } from '../auth/guard/auth.guard';
                 

let routes: Routes = [
  {
    // path: 'products',
    path: '',  //removed products prefix because we are trying to load this module upon need basis -- code in app.module [line 31-34]
    component: ProductHomeComponent,
    canActivate: [AuthGuard],

    //Nested Navigation
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: ProductListComponent
    
      },
      {
        path: 'create',
        component: ProductEditComponent,
        canDeactivate: [SaveAlertGaurdService]
    
      },
      {
        path: 'edit/:id',
        component: ProductEditComponent,
        canDeactivate: [SaveAlertGaurdService]
    
      },
      {
        path: 'search',
        component: ProductSearchComponent
    
      }
    ]
  },
  //URL looks nested but not exacted the Nested Navigation
  // {
  //   path: 'products/list',
  //   component: ProductListComponent

  // },
  // {
  //   path: 'products/edit',
  //   component: ProductEditComponent

  // },
  // {
  //   path: 'products/search',
  //   component: ProductSearchComponent

  // }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpModule,
    FormsModule
  ],
  declarations: [
    ProductListComponent,
    ProductEditComponent,
    ProductSearchComponent, 
    ProductHomeComponent],
    providers: [
      ProductService,
      SaveAlertGaurdService
    ]
})
export class ProductModule { }
