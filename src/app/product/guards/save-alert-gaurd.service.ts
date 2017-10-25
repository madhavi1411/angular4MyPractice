import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductEditComponent } from '../components/product-edit/product-edit.component';

@Injectable()
export class SaveAlertGaurdService implements CanDeactivate<ProductEditComponent> {

  //from auto import
  // canDeactivate(target: ProductEditComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
  //   throw new Error("Method not implemented.");
  // }

  canDeactivate(target: ProductEditComponent): boolean {
    if (target.form.pristine) {
      return true;
    }

    return window.confirm("Do you want to leave?");
  }

  constructor() { }

}
