import {Component, Input, OnInit, DoCheck} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, DoCheck {
  @Input() selectedRecipe: Recipe;
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
