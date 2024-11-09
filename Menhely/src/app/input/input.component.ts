import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [RouterModule, HttpClientModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  adatok: any[] = [];
  allatid: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.allatid = params.get('id');
    });
    if(this.allatid!=null)
    {
      let url2 :string = `https://berenandor.moriczcloud.hu/menhely/listazas?id=${this.allatid}`;
      this.http.get<any[]>(url2).subscribe((data: any[]) => {
        (document.getElementById('name') as HTMLInputElement).value=data[0].nev;
        (document.getElementById('age') as HTMLInputElement).value=data[0].eletkor;
        (document.getElementById('gender') as HTMLInputElement).value=data[0].nem;
        (document.getElementById('species') as HTMLInputElement).value=data[0].faj;
        (document.getElementById('breed') as HTMLInputElement).value=data[0].fajta;
        (document.getElementById('chip') as HTMLInputElement).value=data[0].chip;
        (document.getElementById('color') as HTMLInputElement).value=data[0].szin;
        (document.getElementById('date') as HTMLInputElement).value=data[0].datum;
        (document.getElementById('rabies') as HTMLInputElement).checked = data[0].veszettseg === 1;
        (document.getElementById('parvo') as HTMLInputElement).checked = data[0].parvo === 1;
        (document.getElementById('deworming') as HTMLInputElement).checked = data[0].fereghajto === 1;
      });
      
    }
  }

  onSubmit(): void {
    let url : string;
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
      alert("Töltsd ki az összes mezőt!");
    } else {
      if(chip.length == 15) {
        if(this.allatid==null)
        {
          url = `https://berenandor.moriczcloud.hu/menhely/feltoltes/${nev}/${eletkor}/${fajta}/${szin}/${nem}/${chip}/${faj}/${veszettseg}/${parvo}/${fereghajto}/${datum}`;
        }
        else
        {
          url = `https://berenandor.moriczcloud.hu/menhely/modositas/${this.allatid}/${nev}/${eletkor}/${fajta}/${szin}/${nem}/${chip}/${faj}/${veszettseg}/${parvo}/${fereghajto}/${datum}`;
        }

        this.http.get(url).subscribe(response => {
          console.log('Response:', response);
          alert('Adatok sikeresen feltöltve!');
        }, error => {
          console.error('Error:', error);
          alert('Hiba történt a feltöltés során.');
        });
      } else {
        alert("A chipnek pontosan 15 számjegyből kell állnia!");
      }
    }
  }
}
