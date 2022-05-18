import {Component, OnInit} from '@angular/core';
import {AppModule} from "./app.module";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private authService: AuthService, private router: Router) {

  }
  isUserLoggedIn = false;

  ngOnInit(){
    this.router.navigate(['/main_page']);
  }

  title = "my first project";

  }



