import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { MultiStepFormComponent } from "../../components/multi-step-form/multi-step-form.component";
import { UserComponent } from "../../components/user/user.component";

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchBarComponent, MultiStepFormComponent, UserComponent],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  constructor(private router: Router){
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  isExpanded = false;
  isHovered = false;
  selectedItem = '';

  menuItems = [
    { label: 'Chart', icon: 'pi pi-chart-scatter', badge: 0},
    { label: 'Users', icon:'pi pi-users', badge: 5 },
    { label: 'Form', icon: 'pi pi-align-justify', badge: 0}
  ];

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
    if (!this.isExpanded) {
        this.isHovered = false; 
    }
  }

  onMouseEnter() {
    if (!this.isExpanded) {
        this.isHovered = true;
    }
  }

  onMouseLeave() {
    if (!this.isExpanded) {
        this.isHovered = false;
    }
  }

  selectItem(item: any) {
    this.selectedItem = item.label;
  }

}
