import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-form1',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './test-form1.component.html',
  styleUrl: './test-form1.component.css'
})
export class TestForm1Component {
  profileForm = new FormGroup({
    firstName: new FormControl<any>(''),
    lastName: new FormControl(''),
  });

  constructor() {
    const form$ = this.profileForm.valueChanges;
    const firstName$ = this.profileForm.controls.firstName.valueChanges;
    form$.subscribe(v => console.log(`Form value: ${v.firstName} ${v.lastName}`));
    firstName$.subscribe(v => console.log(`First Name: ${v}`));
  }

  updateName() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      lastName: 'Drew'
    });
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

}
