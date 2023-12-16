import { Component , Input } from '@angular/core';
import { Evennement } from 'src/models/evennement';
import { AdminService } from 'src/services/admin.service';
@Component({
  selector: 'app-evennement-card',
  templateUrl: './evennement-card.component.html',
  styleUrls: ['./evennement-card.component.css']
})
export class EvennementCardComponent {
  UserUsername: string = "Nom Admin";
  @Input() event: Evennement | undefined;
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.UserUsername = this.adminService.getLoggedInAdminUsername();
  }


}
