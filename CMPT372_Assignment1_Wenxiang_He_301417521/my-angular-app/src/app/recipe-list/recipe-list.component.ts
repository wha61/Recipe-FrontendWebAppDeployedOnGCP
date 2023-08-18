
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes = [
    { id: 1, name: 'Recipe 1', ingredients: 'Ingredient 1', directions: 'Direction 1' },
    { id: 2, name: 'Recipe 2', ingredients: 'Ingredient 2', directions: 'Direction 2' },
    { id: 3, name: 'Recipe 3', ingredients: 'Ingredient 3', directions: 'Direction 3' }
  ];

  savedRecipes: any[] = [];
  

  constructor(private router: Router) { 
    // 初始化savedRecipes数组
    this.savedRecipes = [];
  }

  ngOnInit() {
    // 从本地存储中获取已保存的Recipes
    const savedRecipesData = localStorage.getItem('savedRecipes');
    if (savedRecipesData) {
      this.savedRecipes = JSON.parse(savedRecipesData);
    }
    console.log(savedRecipesData)
  }

  showRecipe(recipe: any) {
    console.log(recipe)
    this.router.navigate(['/recipe', recipe.id]);
  }
}
