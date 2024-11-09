import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [HttpClientModule, RouterModule, ActivatedRoute],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent implements OnInit{

  allatid: string | null = null;

  constructor(
    private route: ActivatedRoute,  // ActivatedRoute az URL paraméterekhez
    private http: HttpClient        // HttpClient API hívásokhoz
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // Ha van 'id' paraméter az URL-ben, akkor lekérhetjük az értékét
      this.allatid = params.get('id');
      
      if (this.allatid) {
        console.log('Pet ID found in URL:', this.allatid);
      } else {
        console.log('No pet ID found in URL');
      }
    });



  function onSubmit(): void {

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
    
    const mezok = [
      { id: 'name', value: (document.getElementById('name') as HTMLInputElement).value },
      { id: 'age', value: (document.getElementById('age') as HTMLInputElement).value },
      { id: 'gender', value: (document.getElementById('gender') as HTMLSelectElement).value },
      { id: 'species', value: (document.getElementById('species') as HTMLInputElement).value },
      { id: 'breed', value: (document.getElementById('breed') as HTMLInputElement).value },
      { id: 'chip', value: (document.getElementById('chip') as HTMLInputElement).value },
      { id: 'color', value: (document.getElementById('color') as HTMLInputElement).value },
      { id: 'date', value: (document.getElementById('date') as HTMLInputElement).value }
    ];
    
    const hianyzomezok = mezok.filter(mezok => !mezok.value);

    if (hianyzomezok.length > 0) {
      alert("Töltsd ki az összes mezőt!")
    } 
    else {
      if(chip.length==15)
      {
        const url = `https://berenandor.moriczcloud.hu/menhely/feltoltes/${nev}/${eletkor}/${fajta}/${szin}/${nem}/${chip}/${faj}/${veszettseg}/${parvo}/${fereghajto}/${datum}`;

      
        this.http.get(url).subscribe(response => {
          console.log('Response:', response);
          alert('Adatok sikeresen feltöltve!');
        }, error => {
          console.error('Error:', error);
          alert('Hiba történt a feltöltés során.');
        });
      }
      else
      {
        alert("A chipnek pontosan 15 számjegyből kell állnia!")
      }
    }
    
  }
}
