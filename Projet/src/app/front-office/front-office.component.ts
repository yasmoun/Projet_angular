import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evennement } from 'src/models/evennement';
import { EvennementService } from 'src/services/evennement.service';

@Component({
  selector: 'app-front-office',
  templateUrl: './front-office.component.html',
  styleUrls: ['./front-office.component.css']
})
export class FrontOfficeComponent implements OnInit {
  events: Evennement[] = []; 
  filteredEvents: any[] = [];
  searchTerm: string = '';

constructor(private route : Router , private eventService : EvennementService){}

ngOnInit(): void {

  this.eventService.getEvennements().subscribe({
    next:(data)=>{
      this.events=data;
      this.filteredEvents = data;
    },
    error:(err)=>console.log(err)
  })
  
}



  handleLogout() {
    console.log('Déconnexion effectuée');
    this.route.navigate(['/authentification']);
  }

  applyFilters() {
    this.filteredEvents = this.events.filter((event) =>
      event.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      event.prix.toString().includes(this.searchTerm) ||
      event.date.toString().includes(this.searchTerm) ||
      (event.estvalide ? 'Yes' : 'No').toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
