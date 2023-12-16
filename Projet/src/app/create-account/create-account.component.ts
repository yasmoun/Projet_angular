
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/services/user-service.service';
import { User } from 'src/models/User';



@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  createAccountForm !: FormGroup;
  show: boolean = false;
  success : boolean = false;

  constructor(private fb: FormBuilder ,private userService : UserServiceService  ) { }

  ngOnInit(): void {
    this.createAccountForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onCreateAccountSubmit() {
    if (this.createAccountForm.valid) {
      // Implement your logic for account creation here
      console.log('Form submitted successfully!');

      // Create a user object from the form values
      const newUser: User = {
        username: this.createAccountForm.get('username')?.value,
        password: this.createAccountForm.get('password')?.value,
        role: "user" // Set the default role to 1
      };

      console.log(newUser.role)

      // Call the userService to add the user
      this.userService.addUser(newUser).subscribe(
        {
          next:()=>{
            console.log('user added succefully')
            this.success=true;
            
        },
          error:(err)=>console.log(err)
        }
      );
    } else {
      // Handle invalid form
      console.log('Form is invalid. Please check the errors.');

      // Check if password mismatch error is present
      if (this.createAccountForm.hasError('passwordMismatch')) {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  }

}
