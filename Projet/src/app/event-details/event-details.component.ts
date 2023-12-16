import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evennement } from 'src/models/evennement';
import { EvennementService } from 'src/services/evennement.service';
import html2pdf from 'html2pdf.js';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit{

  constructor(private ac : ActivatedRoute , private eventService:EvennementService, private route : Router){}

  eventID !: number;
  currentEvent !: Evennement;

  ngOnInit(): void {

    this.ac.params.subscribe(params => {

      this.eventID = +params['id'];
      console.log(this.eventID);
    });

    this.eventService.getEvennementById(this.eventID).subscribe({
      next:(data)=> this.currentEvent=data,
      error:(err)=>console.log(err)
    })
  }

  handleLogout() {
    console.log('Déconnexion effectuée');
    this.route.navigate(['/authentification']);
  }
  downloadAsPDF() {
    const element = document.getElementById('eventDetailsContainer'); // Replace 'eventDetailsContainer' with the actual ID of the container.

    if (element) {
      const options = {
        margin: 10,
        filename: 'event_details.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      html2pdf().from(element).set(options).outputPdf();
    }
  }

}
