import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProducto } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productList: IProducto[] = [];
  private _apiservice = inject(ApiService);
  private _route = inject(Router);

  ngOnInit(): void {
    this._apiservice.getProducts().subscribe((data: IProducto[]) => {
      this.productList = data;
    });
  }

  navegate(id: number) {
    this._route.navigate(['/products',id])
  }
}
