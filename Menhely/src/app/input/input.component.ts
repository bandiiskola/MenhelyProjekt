import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [HttpClientModule, HttpClient],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  formData = {
    nev: '',
    eletkor: null,
    fajta: '',
    szin: '',
    nem: 0,
    chip: '',
    faj: '',
    veszettseg: 0,
    parvo: 0,
    fereghajto: 0,
    datum: '',
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    const {
      nev,
      eletkor,
      fajta,
      szin,
      nem,
      chip,
      faj,
      veszettseg,
      parvo,
      fereghajto,
      datum,
    } = this.formData;
    const url = `https://berenandor.moriczcloud.hu/menhely/feltoltes/${nev}/${eletkor}/${fajta}/${szin}/${nem}/${chip}/${faj}/${veszettseg}/${parvo}/${fereghajto}/${datum}`;

    this.http.get(url).subscribe(
      (response) => {
        console.log('Response:', response);
        alert('Adatok sikeresen feltöltve!');
      },
      (error) => {
        console.error('Error:', error);
        alert('Hiba történt a feltöltés során.');
      }
    );
  }
}
