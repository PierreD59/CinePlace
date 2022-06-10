import { Component, OnInit } from '@angular/core';
import { Cinema } from '../interface/cinema';
import { CinemaService } from '../services/cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.page.html',
  styleUrls: ['./cinema.page.scss'],
})
export class CinemaPage implements OnInit {

  constructor(private cinemaService: CinemaService) { }

  getAll(): void {
    this.cinemaService.getAll().subscribe((__cinema: Cinema[]) => { console.log() });
  }

  ngOnInit() {
  }
}
