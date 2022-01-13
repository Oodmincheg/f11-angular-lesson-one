import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
  
export class AppComponent {
  title: any = 'Lesson one';
  arr: String[] = ['hello']

  test(): void {
    this.title = 7
    this.arr.push('h')
  }
}
