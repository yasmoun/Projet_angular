import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-headerfront',
  templateUrl: './headerfront.component.html',
  styleUrls: ['./headerfront.component.css']
})
export class HeaderfrontComponent {

  UserUsername: string = "Nom Admin"; // Default value or initial value

  constructor(private adminService: AdminService) {}

  @Output() logoutClick = new EventEmitter<void>();
  logout(): void {
    this.logoutClick.emit();
  }
  ngOnInit(): void {
    this.UserUsername = this.adminService.getLoggedInAdminUsername();
  } 
  

}
