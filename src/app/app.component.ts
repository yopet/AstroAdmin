import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UtilService } from './api/util.service';
import { AuthService } from './api/auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  darkMode: boolean = Boolean(localStorage.getItem("dark"));
  activePageTitle = 'Dashboard';
  constructor(public authService: AuthService, private router: Router, private menu: MenuController ,public Util:  UtilService ) {


    if (this.darkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }

  }

  change(event) {
    localStorage.setItem("dark", event.detail.checked);
    if (event.detail.checked) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }

  }

  logout() {
    this.menu.close();
    if (!this.authService.logout().success) {
      this.Util.presentLoading();
      this.router.navigate(['/home']);
    }
  }

}
