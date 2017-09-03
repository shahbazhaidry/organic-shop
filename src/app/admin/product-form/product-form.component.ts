import { Router } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;

  constructor(categoryService: CategoryService,
    private productService: ProductService, private router: Router) {

    this.categories$ = categoryService.getCatagories();
  }

  ngOnInit() {
  }

  save(product) {
    //console.log(product);
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

}