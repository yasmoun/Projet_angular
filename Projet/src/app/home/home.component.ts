import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Evennement } from 'src/models/evennement';
import { EvennementService } from 'src/services/evennement.service';

import { Router } from '@angular/router';
import { EditEvennnementComponent } from '../edit-evennnement/edit-evennnement.component';






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'photo', 'prix', 'estvalide', 'date' , 'actions'];
  listEvennements: Evennement[]=[] ;

  constructor(private evennementService : EvennementService , private route : Router , private dialog: MatDialog){}

  ngOnInit(): void {
    this.evennementService.getEvennements().subscribe({
      next: (data)=> 
      {this.listEvennements = data;
        console.log(this.listEvennements);

      },
      error: (err) => console.log(err)
    })
  }
  handleLogout() {
    console.log('Déconnexion effectuée');
    this.route.navigate(['/authentification']);
  }

  // Inside your component class
addEvent() {
  // Implement logic for adding a new event
  this.route.navigate(['/event-form']); }

  editEvent(evennement : Evennement) {
  // Implement logic for editing the selected event
  const dialogRef = this.dialog.open(EditEvennnementComponent, {
    width: '400px', // Adjust the width as needed
    data: { event: evennement }
  });

  dialogRef.afterClosed().subscribe(result => {
    // Handle the result after the dialog is closed
    if (result) {
      // Update your data or perform any other actions
    }
  });
}

deleteEvent(id : number) {
  this.evennementService.deleteEvennement(id).subscribe({
    next:()=>      this.listEvennements = this.listEvennements.filter(event => event.id !== id),
    error:(err)=>console.log(err)

  })
}


applyFilter(event: Event): void {
  const filterValue = (event.target as HTMLInputElement)?.value.trim().toLowerCase();

  if (filterValue === '') {
    // If the search input is empty, reset the list to its original state
    this.loadEvennements();
  } else {
    // Filter your listEvennements array based on the entered search term
    this.listEvennements = this.listEvennements.filter(event =>
      event.nom.toLowerCase().includes(filterValue) ||
      event.prix.toString().includes(filterValue) ||
      event.estvalide.toString().includes(filterValue) ||
      event.date.toString().includes(filterValue)
    );
  }
}

// Add a method to load the original data
loadEvennements(): void {
  // Assuming you have a service method to fetch the original data
  this.evennementService.getEvennements().subscribe(data => {
    this.listEvennements = data;
  });
}









  
}
