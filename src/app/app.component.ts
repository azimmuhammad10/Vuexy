import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CoreComponent } from "./core/core.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VuexyClone';
}
