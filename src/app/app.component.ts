

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule], // Assurez-vous que RouterModule est importé ici
})
export class AppComponent {
  title = 'Gestion des Produits';
}
