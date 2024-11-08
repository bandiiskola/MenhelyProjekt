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

  

  constructor(private http: HttpClient) {}

  onSubmit() {

    const nev = (document.getElementById('name') as HTMLInputElement).value;
    const eletkor = (document.getElementById('age') as HTMLInputElement).value;
    const nem = (document.getElementById('gender') as HTMLSelectElement).value;
    const faj = (document.getElementById('species') as HTMLInputElement).value;
    const fajta = (document.getElementById('breed') as HTMLInputElement).value;
    const chip = (document.getElementById('chip') as HTMLInputElement).value;
    const szin = (document.getElementById('color') as HTMLInputElement).value;
    const veszettseg = (document.getElementById('rabies') as HTMLInputElement).checked ? 1 : 0;
    const parvo = (document.getElementById('parvo') as HTMLInputElement).checked ? 1 : 0;
    const fereghajto = (document.getElementById('deworming') as HTMLInputElement).checked ? 1 : 0;
    const datum = (document.getElementById('date') as HTMLInputElement).value;
    
    const url = `https://berenandor.moriczcloud.hu/menhely/feltoltes/`+nev+`/`+eletkor+`/`+fajta+`/`+szin+`/`+nem+`/`+chip+`/`+faj+`/`+veszettseg+`/`+parvo+`/`+fereghajto+`/`+datum;
    
    this.http.get(url).subscribe(response => {
      console.log('Response:', response);
      alert('Adatok sikeresen feltöltve!');
    }, error => {
      console.error('Error:', error);
      alert('Hiba történt a feltöltés során.');
    });
  }
}
