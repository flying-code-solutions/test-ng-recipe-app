import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output()
  detail: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is just a test...", "https://vareni-production-cdn.xsd.cz/obrazky/recepty/10399/3d1876d3-2738-49ce-ad60-7d268ed64b09-velky.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

  sendToDetail(recipe: Recipe) {
    this.detail.emit(recipe);
  }

}
