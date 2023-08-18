import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 添加此行

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }

  savedRecipes: any[] = [];
  index: number = 0;

  ngOnInit() {
    // get saved recipes from local storage
    const savedRecipesData = localStorage.getItem('savedRecipes');
    if (savedRecipesData) {
      this.savedRecipes = JSON.parse(savedRecipesData);
    }
    this.index = this.savedRecipes.length;
    console.log(this.index)
  }

  recipe = {
    id: 0,
    savedTime: '',
    name: '',
    ingredients: '',
    directions: ''
  };

  resetForm() {
    this.recipe = {
      id: 0,
      savedTime: '',
      name: '',
      ingredients: '',
      directions: ''
    };
  }

  saveRecipe() {
    // get timestamp
    const timestamp = Date.now();
    
    // Create a Date object
    const date = new Date(timestamp);

    // Gets the year, month, date, hour, minute, and second
    const year = date.getFullYear();
    const month = date.getMonth() + 1; 
    const day = date.getDate();
    let  hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    // Determine whether it is morning or afternoon and convert it to AM/PM format
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12; // Convert the hours to a 12-hour system

 

    // save as string
    const formattedDateTime = `${year}-${month}-${day} ${hour}:${minute}:${second} ${ampm}`;


    this.recipe.savedTime = formattedDateTime;
    this.recipe.id = this.index;

    if (this.recipe.name.trim() === '') {
      alert('Please enter the name of your recipe.');
      return;
    }

    this.savedRecipes.push(this.recipe);
    
    // save to local storage
    localStorage.setItem('savedRecipes', JSON.stringify(this.savedRecipes));

    console.log('Recipe saved:', this.savedRecipes);

    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
