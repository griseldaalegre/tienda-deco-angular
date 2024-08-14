import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http'; // Asegúrate de importar esto
import { ApiService } from './components/services/api.service';



//seria el equivalente al app.mmodule

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(), // Asegúrate de proporcionar HttpClient
    ApiService, // Proporciona tu servicio
  ] //funcion a la que pasamos nuestras rutas
};
