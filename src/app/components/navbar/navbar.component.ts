import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [ RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  menuItems = [
    { name: 'Inicio', router: '' },
    { name: 'Cartazes', router: '/posters'},
    { name: 'Admin', router: '/admin'}
  ]

}
