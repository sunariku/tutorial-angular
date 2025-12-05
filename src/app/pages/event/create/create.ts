import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {
  private formBuilder = inject(FormBuilder);

  createEventForm = this.formBuilder.group({
    title: this.formBuilder.control('', Validators.required),
    picture: this.formBuilder.control('', Validators.required),
    description: this.formBuilder.control('', Validators.required),
  });

  onSubmit(): void {
    if (this.createEventForm.valid) {
      const f = this.createEventForm.value;

      const title = f.title;
      const picture = f.picture;
      const description = f.description;

      alert(`Title: ${title}`);
    }
  }
}
