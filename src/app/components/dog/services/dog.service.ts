import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FetchedDogBreeds } from '../types/dog.types';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  constructor(private http: HttpClient) { }

  getDogBreeds() {
    return this.http.get<FetchedDogBreeds>("https://dog.ceo/api/breeds/list/all")
  }
  
}
