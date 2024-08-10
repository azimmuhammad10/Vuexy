import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from "./search-bar/search-bar.component";

@Component({
  selector: 'app-core',
  standalone: true,
  imports: [RouterModule, SideMenuComponent, SearchBarComponent],
  templateUrl: './core.component.html',
  styleUrl: './core.component.css'
})
export class CoreComponent {



}
