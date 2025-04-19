import { Component } from '@angular/core';
import { Movies } from '../../core/services/types/movies';
import { MoviesService } from '../../core/services/movies.service';

@Component({
  selector: 'app-posters',
  imports: [],
  templateUrl: './posters.component.html',
  styleUrl: './posters.component.css'
})
export class PostersComponent {
  getMovies: Movies[] = [];

  constructor(private service: MoviesService){}

  ngOnInit(): void {
    this.service.listar().subscribe((movies) => {
      this.getMovies = movies;
    })
  }
}
