import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SpiderManComponent } from '../Component/spider-man/spider-man.component';
import { IronManComponent } from '../Component/iron-man/iron-man.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SpiderManComponent, IronManComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ServicesDemo';
}
