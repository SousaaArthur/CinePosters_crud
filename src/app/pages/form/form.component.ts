import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Movies } from '../../core/services/types/movies';
import { MoviesService } from '../../core/services/movies.service';

@Component({
  selector: 'app-form',
  imports: [ RouterModule, FormsModule ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  movie: Movies = {} as Movies;
  movieId?: String;

  constructor(private service: MoviesService, private router: Router, private route: ActivatedRoute){ }

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.movieId = String(idParam);
        this.service.searchId(Number(this.movieId)).subscribe(movie => {
          if (movie) {
            this.movie.id = movie.id;
            this.movie.name = movie.name;
            this.movie.year = movie.year;
            this.movie.category = movie.category;
            this.movie.assessment = movie.assessment;
            this.movie.description = movie.description;
            this.movie.image = movie.image;
          }
        });
      } else {
        this.movie.id = this.generateRandomId();
      }
    })
  }

  generateRandomId(): string {
    return Math.floor(Math.random() * 10000).toString();
  }

  add() {
    if (this.movieId) {
      this.service.edit(this.movie).subscribe(() => {
        this.router.navigate(['/admin'])
      })
    } else {
      this.service.add(this.movie).subscribe(() => {
        this.router.navigate(['/admin'])
      })
    }
  }

}
