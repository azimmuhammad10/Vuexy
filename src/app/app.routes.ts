import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { MultiStepFormComponent } from './components/multi-step-form/multi-step-form.component';
import { CharttComponent } from './components/chartt/chartt.component';

export const routes: Routes = [
    { path: '', redirectTo: '/Chart', pathMatch: 'full'},
    { path: 'Users', component: UserComponent},
    { path: 'Form', component: MultiStepFormComponent},
    { path: 'Chart', component: CharttComponent},
];
