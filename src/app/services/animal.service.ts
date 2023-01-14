import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private baseUrl = "http://localhost:3000/animals"

  constructor(private _httpClient: HttpClient) { 
  }

  public getAnimals(): Observable<Animal[]> {
    return this._httpClient.get<Animal[]>(this.baseUrl).pipe(
      map((data: any[]) => data.map((animal: any) => this._createAnimalFromObject(animal)))
    )
  }

  public showAnimal(id: number): Observable<Animal> {
    return this._httpClient.get<Animal>(this.baseUrl + "/" + id).pipe(
      map((data: Animal) => this._createAnimalFromObject((data)))
    )
  }
  public removeAnimal(id: number): Observable<Animal> {
    return this._httpClient.delete(this.baseUrl + "/" + id).pipe(
      map((data: any) => this._createAnimalFromObject(data))
    )
  }

  public addAnimal(animal: Animal): Observable<Animal> {
    return this._httpClient.post(this.baseUrl, animal).pipe(
      map((data: any) => this._createAnimalFromObject(data))
    )
  }

  public editAnimalById(id: number, name: string, price: number, image: string): Observable<Animal>{
    const body = {name: name, price: price, image: image};
    return this._httpClient.put<Animal>(this.baseUrl+'/'+id, body).pipe(
      map((data:any) => this._createAnimalFromObject(data))
    )
  }

  private _createAnimalFromObject(animal: any): any {
    return new Animal(animal.id, animal.name, animal.price, animal.image)
  }
}



 