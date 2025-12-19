import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Event as EventService } from '../../../services/event';
import { Event as EventModel } from '../../../models/event';
import { take } from 'rxjs';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {
  private formBuilder = inject(FormBuilder);
  private eventService = inject(EventService);

  createEventForm = this.formBuilder.group({
    title: this.formBuilder.control('', Validators.required),
    picture: this.formBuilder.control('', Validators.required),
    description: this.formBuilder.control('', Validators.required),
  });

  onSubmit(): void {
    if (this.createEventForm.valid) {
      const f = this.createEventForm.value;

      const title = f.title!;
      const picture = f.picture!;
      const description = f.description!;

      const data: EventModel = {
        picture,
        title,
        description,
      };

      this.eventService.addEvent(data).pipe(take(1)).subscribe({
        next: (response) => {
          alert(response.message)
        },
        error: () => {
          alert("Insert Gagal");
        }
      });
    }
  }
}
