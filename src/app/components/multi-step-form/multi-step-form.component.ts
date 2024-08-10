import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-multi-step-form',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule],
  templateUrl: './multi-step-form.component.html',
  styleUrl: './multi-step-form.component.css'
})
export class MultiStepFormComponent {
  currentStep: number = 1;
  // steps: string[] = ['Account Details', 'Personal Info', 'Social Links'];
  steps=[
    {title:'Account Details', subTitle:'Setup Account Details'},
    {title:'Personal Info', subTitle:'Add Personal Info'},
    {title:'Social Links', subTitle:'Add Social Links'}]

  formData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  nextStep() {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

}
