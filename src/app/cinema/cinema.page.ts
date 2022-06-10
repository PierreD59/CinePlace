import { Component, OnInit } from '@angular/core';
import { Cinema } from '../interface/cinema';
import { CinemaService } from '../services/cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.page.html',
  styleUrls: ['./cinema.page.scss'],
})
export class CinemaPage implements OnInit {
  cinemas!: Cinema[];

  constructor(private cinemaService: CinemaService) { }

  getAll(): void {
    this.cinemaService.getAll().subscribe({
      next: cinemas => this.cinemas = cinemas,
    });
  }

  ngOnInit() {
  }

}
