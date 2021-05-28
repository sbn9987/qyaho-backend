import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import Swal from "sweetalert2";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit(): void {
  }

  onLogoutClick() {
    this.authService.logout();
    Swal.fire({
      title: "로그아웃 성공! ",
      icon: "success",
      confirmButtonText: "확인",
    });
    this.router.navigate(['']);
    return false;
   }
   checkLoggedIn() {
     return this.authService.loggedIn();
   }
}
  


