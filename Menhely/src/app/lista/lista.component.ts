import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [HttpClientModule, RouterModule, CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit{
  pets: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const url = `https://berenandor.moriczcloud.hu/menhely/listazas`;
    this.http.get<any[]>(url).subscribe((data: any[]) => {
      this.pets = data;
      console.log('Adatok betöltve:', this.pets);
    });
  }
}
