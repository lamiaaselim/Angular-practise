import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-myfirst',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ProductsComponent) child :ProductsComponent
  title = 'FristPro';

  ngAfterViewInit(){
    // this.child.renderValues();
  }
}
