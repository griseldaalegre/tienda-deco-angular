import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    // Suscribirse a los eventos de navegación del router
    this.router.events.subscribe(event => {
      // Verificar si el evento es de tipo NavigationEnd
      if (event instanceof NavigationEnd) {
        // Seleccionar el botón de alternancia del menú (hamburguesa)
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler) {
          // Crear una instancia de Bootstrap Collapse para el menú
          const bsCollapse = new (window as any).bootstrap.Collapse(document.querySelector('#navbarNav'), {
            toggle: false // No alternar el menú, solo ocultarlo
          });
          // Ocultar el menú desplegable
          bsCollapse.hide();
        }
      }
    });
  }
}
