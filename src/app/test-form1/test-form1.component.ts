import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-form1',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './test-form1.component.html',
  styleUrl: './test-form1.component.css'
})
export class TestForm1Component {
  name = new FormControl('');
}
