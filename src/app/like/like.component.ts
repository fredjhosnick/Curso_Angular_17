import { Component } from '@angular/core';

@Component({
  selector: 'app-like',
  standalone: true,
  imports: [],
  template: `
  <div class="container">
     <img src="./assets/like.svg" alt="like"/>
  </div>
  `,
  styles: `.container{background-color:black}`,
})
export class LikeComponent {

}
