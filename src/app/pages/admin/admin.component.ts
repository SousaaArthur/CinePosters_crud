import { Component } from '@angular/core';
import { Movies } from '../../core/services/types/movies';
import { MoviesService } from '../../core/services/movies.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [ RouterModule ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  getMovies: Movies[] = [];

  constructor(private service: MoviesService){}

  ngOnInit(): void {
    this.service.listar().subscribe((movies) => {
      this.getMovies = movies;
    })
  }

  remove(id: number){
    this.service.remove(id).subscribe(() => {
      window.location.reload();
    })
  }

}
