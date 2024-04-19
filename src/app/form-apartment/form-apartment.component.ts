import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-apartment',
  templateUrl: './form-apartment.component.html',
  styleUrls: ['./form-apartment.component.css']
})
export class FormApartmentComponent implements OnInit {
  apartForm!: FormGroup; 

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.apartForm = this.formBuilder.group({
      appartNum: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      floorNum: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      surface: ['', Validators.required],
      terrace: [false],
      surfaceTerrace: [{ value: '', disabled: true }, Validators.required],
      category: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });

    this.apartForm.get('terrace')?.valueChanges.subscribe(value => {
      if (value) {
        this.apartForm.get('surfaceTerrace')?.enable();
      } else {
        this.apartForm.get('surfaceTerrace')?.disable();
      }
    });
  }

  onSubmit(): void {
    if (this.apartForm.valid) {
      console.log('Form submitted successfully!', this.apartForm.value);
      // Ajoutez ici la logique pour soumettre les données du formulaire
    } else {
      console.error('Invalid form. Please check all fields.');
    }
  }
}
