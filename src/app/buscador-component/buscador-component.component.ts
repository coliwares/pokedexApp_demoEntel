// FILE: buscador-component.component.ts
import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscador-component',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './buscador-component.component.html',
  styleUrls: ['./buscador-component.component.css'],
})
export class BuscadorComponentComponent {
  pokemon: any = null;

  constructor(private http: HttpClient) {}

  buscarPokemon(nombreOId: string) {
    this.http.get('https://pokeapi.co/api/v2/pokemon/' + nombreOId)
      .subscribe(data => {
        this.pokemon = data;
      });
  }
}