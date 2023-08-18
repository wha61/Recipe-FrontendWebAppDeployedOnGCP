import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-saved-recipe',
  templateUrl: './saved-recipe.component.html',
  styleUrls: ['./saved-recipe.component.css']
})
export class SavedRecipeComponent implements OnInit {
  recipe: any;
  savedRecipes: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const recipeId = +params['id'];

      console.log(recipeId)
      // 根据食谱ID获取食谱的详细信息
      this.recipe = this.getRecipeById(recipeId);
    });
  }

  getRecipeById(recipeId: number) {
    // 这里可以根据食谱ID从数据源中获取食谱的详细信息
    // 示例中使用硬编码的数据
    const savedRecipesData = localStorage.getItem('savedRecipes');
    if (savedRecipesData) {
      this.savedRecipes = JSON.parse(savedRecipesData);
    }

    console.log(this.savedRecipes)
    return this.savedRecipes.find(recipe => recipe.id === recipeId);
  }

  close(){
    window.close();
    this.location.back();
  }

  
}

