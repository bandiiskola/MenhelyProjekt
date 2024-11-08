import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [HttpClientModule, RouterModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent{

  nev = (document.getElementById('name') as HTMLInputElement).value;
  eletkor = (document.getElementById('age') as HTMLInputElement).value;
  nem = (document.getElementById('gender') as HTMLSelectElement).value;
  faj = (document.getElementById('species') as HTMLInputElement).value;
  fajta = (document.getElementById('breed') as HTMLInputElement).value;
  chip = (document.getElementById('chip') as HTMLInputElement).value;
  szin = (document.getElementById('color') as HTMLInputElement).value;
  veszettseg = (document.getElementById('rabies') as HTMLInputElement).checked ? 1 : 0;
  parvo = (document.getElementById('parvo') as HTMLInputElement).checked ? 1 : 0;
  fereghajto = (document.getElementById('deworming') as HTMLInputElement).checked ? 1 : 0;
  datum = (document.getElementById('date') as HTMLInputElement).value;

  constructor(private http: HttpClient) {}

  onSubmit() {

    
    const url = `https://berenandor.moriczcloud.hu/menhely/feltoltes/`+this.nev+`/`+this.eletkor+`/`+this.fajta+`/`+this.szin+`/`+this.nem+`/`+this.chip+`/`+this.faj+`/`+this.veszettseg+`/`+this.parvo+`/`+this.fereghajto+`/`+this.datum;
    
    this.http.get(url).subscribe(response => {
      console.log('Response:', response);
      alert('Adatok sikeresen feltöltve!');
    }, error => {
      console.error('Error:', error);
      alert('Hiba történt a feltöltés során.');
    });
  }
}
