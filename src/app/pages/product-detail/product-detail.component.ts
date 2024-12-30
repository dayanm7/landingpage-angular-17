import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProducto } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  loading:boolean = true;
  public product?:IProducto;
  private _routerActive = inject(ActivatedRoute);
  private _apiservice = inject(ApiService);

  ngOnInit(): void {
    this._routerActive.params.subscribe(params => {
      this._apiservice.getProductById(params['id']).subscribe((data:IProducto)=>{
        console.log(data);
        this.product=data;
        this.loading = false;
      })
    }
  )
  }
}
