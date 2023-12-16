import { HttpClient   } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/models/User';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  
  private apiUrl = 'http://localhost:3000/user';
  private loggedInAdminUsername: string = '';
  constructor(private http: HttpClient ) { }


  /*
  authenticateAdmin(username: string, password: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.getAllAdmins().subscribe(
       { next:(admins) => {
          
          const isAdmin = admins.some(admin => admin.username === username && admin.password === password);
          
          if(isAdmin){
              this.route.navigate(['/home']);
          }else{
            console.log("compte introuvable")
          }
          
        },
        error:(error) => {console.log("erreur d authentification "+ error)
          
        }

      }
      );
    });
  }  */

  setLoggedInAdminUsername(username: string) {
    this.loggedInAdminUsername = username;
  }
  getLoggedInAdminUsername() {
    return this.loggedInAdminUsername;
  }
  getAllAdmins(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUserByUsernameAndPassword(username: string, password: string): Observable<User> {
    const url = `${this.apiUrl}?username=${username}&password=${password}`;
    return this.http.get<User>(url); // Specify the type as User
  }

  getRoleByUsernameAndPassword(username: string, password: string): Observable<string | undefined> {
    return this.getUserByUsernameAndPassword(username, password).pipe(
      map((user: any) => user?.role)
    );
  }

  
}
