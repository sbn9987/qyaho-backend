import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
    this.router.navigate(['/login']);
    return false;
   }
   checkLoggedIn() {
    return this.authService.loggedIn();
  }
}
