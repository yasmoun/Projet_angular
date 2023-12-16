import { User } from './../../models/User';

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {  Router } from '@angular/router';
import { AdminService } from 'src/services/admin.service';
import { CreateAccountComponent } from '../create-account/create-account.component';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {
  loginForm: FormGroup;
  errorMessage: string="";
  adminNotFound = false;
  currentUser!: User;


  constructor(private fb: FormBuilder, private adminService: AdminService , private route : Router ,  private dialog: MatDialog) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  onSubmit() {
    const username = this.loginForm.get('username')!.value;
    const password = this.loginForm.get('password')!.value;
    console.log(username);
    console.log(password);

    this.adminService.getUserByUsernameAndPassword(username, password).subscribe({
      next: (user: any) => {
        if (user && user.length > 0) {
          if (user[0].role === 'admin') {
            this.adminService.setLoggedInAdminUsername(username);
            this.route.navigate(['/home']);
          } else if (user[0].role === 'user') {
            this.adminService.setLoggedInAdminUsername(username);
            this.route.navigate(['/front-office']);
          } else {
            this.adminNotFound = true;
          }
        } else {
          this.adminNotFound = true;
        }
      },
      error: (error) => {
        console.log("Error during authentication:", error);
      }
    });
  }


    /*
    this.adminService.getUserByUsernameAndPassword(username, password).subscribe({
      next: (user) => {
        console.log('User response:', user);

        if (user.role === 'admin') {
          this.adminService.setLoggedInAdminUsername(username);
          this.route.navigate(['/home']);
        } else if (user.role === 'user') {
          this.adminService.setLoggedInAdminUsername(username);
          this.route.navigate(['/front-office']);
        } else {
          this.adminNotFound = true;
          console.log(user.role);
        }
      },
      error: (error) => {
        console.log("Error during authentication:", error);
      }
    });  */





  createaccount(){
    // Implement logic for editing the selected event
  const dialogRef = this.dialog.open(CreateAccountComponent, {
    width: '400px', // Adjust the width as needed

  });

  dialogRef.afterClosed().subscribe(result => {
    // Handle the result after the dialog is closed
    if (result) {
      // Update your data or perform any other actions
    }
  });
  }


}
