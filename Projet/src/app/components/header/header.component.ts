import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AdminService } from 'src/services/admin.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  adminUsername: string = "Nom Admin"; // Default value or initial value

  constructor(private adminService: AdminService) {}

  @Output() logoutClick = new EventEmitter<void>();
  logout(): void {
    this.logoutClick.emit();
  }
  ngOnInit(): void {
    this.adminUsername = this.adminService.getLoggedInAdminUsername();
  } 
}