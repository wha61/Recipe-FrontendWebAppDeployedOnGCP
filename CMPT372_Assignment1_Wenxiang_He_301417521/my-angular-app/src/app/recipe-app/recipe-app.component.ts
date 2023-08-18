import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-app',
  templateUrl: './recipe-app.component.html',
  styleUrls: ['./recipe-app.component.css']
})
export class RecipeAppComponent {

  clearAll() {
    localStorage.clear();
    alert('All recipes deleted');
  }

}
