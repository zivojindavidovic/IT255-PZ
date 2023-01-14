import { Component } from '@angular/core';
import { Animal } from '../models/animal';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public animals: Animal[];

  constructor(private _animalService: AnimalService){}

  ngOnInit(): void{
    this._animalService.getAnimals().subscribe((data:Animal[]) => 
      this.animals = data
    )
  }

  public deleteAnimal(id: number){
    this._animalService.removeAnimal(id).subscribe((data) => {
      this._removePostFromList(id);
    })
  }
  private _removePostFromList(id: number) {
    let ind = this.animals.findIndex(post => post.id = id);
    this.animals.splice(ind, 1);
  }
}
