import { Injectable } from '@angular/core';
import { Movies } from './types/movies';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private readonly API = 'http://localhost:3000/movies';

  constructor( private http: HttpClient) { }

  listar(): Observable<Movies[]>{
    return this.http.get<Movies[]>(this.API);
  }

  add(movie: Movies): Observable<Movies> {
    return this.http.post<Movies>(this.API, movie);
  }

  remove(id: number): Observable<Movies> {
    return this.http.delete<Movies>(this.API + `/${id}`);
  }

  edit(movie: Movies): Observable<Movies> {
    const url = `${this.API}/${movie.id}`;
    return this.http.put<Movies>(url, movie);
  }

  searchId(id: number): Observable<Movies | undefined> {
    return this.http.get<Movies>(this.API + `/${id}`)
  }
}
