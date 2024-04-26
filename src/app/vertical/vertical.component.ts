import { Component } from '@angular/core';

@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.css']
})
export class VerticalComponent {
  isVisible = true;
  show=true;

  Show() {
   // this.isVisible = !this.isVisible;
   this.isVisible = false;
    this.show=false;
  }
}
