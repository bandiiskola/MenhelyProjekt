import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [HttpClientModule, NgModel],
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
    datum: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    const { nev, eletkor, fajta, szin, nem, chip, faj, veszettseg, parvo, fereghajto, datum } = this.formData;

    // Ellenőrzés: ha a datum nincs megadva, figyelmeztetést adhatsz
    if (!datum) {
      alert('A dátum megadása kötelező!');
      return;  // Megakadályozza a továbbhaladást, ha nincs dátum
    }

    // API URL kialakítása
    const url = `https://berenandor.moriczcloud.hu/menhely/feltoltes/${nev}/${eletkor}/${fajta}/${szin}/${nem}/${chip}/${faj}/${veszettseg}/${parvo}/${fereghajto}/${datum}`;
    
    this.http.get(url).subscribe(response => {
      console.log('Response:', response);
      alert('Adatok sikeresen feltöltve!');
    }, error => {
      console.error('Error:', error);
      alert('Hiba történt a feltöltés során.');
    });
  }
}
