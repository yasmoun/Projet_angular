import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  constructor(private route:Router){}

  handleLogout() {
    console.log('Déconnexion effectuée');
    this.route.navigate(['/authentification']);
  }
}
