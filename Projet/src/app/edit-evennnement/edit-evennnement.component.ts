import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component , Inject} from '@angular/core';
import { formatDate } from '@angular/common';
import { EvennementService } from 'src/services/evennement.service';
import { Evennement } from 'src/models/evennement';



@Component({
  selector: 'app-edit-evennnement',
  templateUrl: './edit-evennnement.component.html',
  styleUrls: ['./edit-evennnement.component.css']
})
export class EditEvennnementComponent {
  editForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditEvennnementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private eventService : EvennementService
  ) {
    this.editForm = this.fb.group({
      nom: [data.event.nom, Validators.required],
      photo: [data.event.photo, Validators.required],
      prix: [data.event.prix, Validators.required],
      estvalide: [data.event.estvalide],
      date: [data.event.date ? formatDate(data.event.date, 'yyyy-MM-dd', 'en-US') : null, Validators.required],
     

    });
  }

  onSaveClick(): void {
    if (this.editForm.valid) {
      const editedEvent: Evennement = { ...this.data.event, ...this.editForm.value };
  
      this.eventService.updateEvennement(editedEvent).subscribe({
        next: (updatedEvent) => {
          console.log('Event updated successfully:', updatedEvent);
          this.dialogRef.close(updatedEvent);
        },
        error: (error) => {
          console.error('Error updating event:', error);
          // Handle the error appropriately, e.g., show an error message
        }
      });
    }
  }
  

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
