import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../models/animal';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent {

  public animal: Animal;

  constructor(private _animalService: AnimalService, private _router: ActivatedRoute){}

  ngOnInit(): void{
    this._router.params.subscribe(params => {
      let id =+ params['id'];
      this.getAnimal(id);
    })
  }
  public getAnimal(id: number){
    this._animalService.showAnimal(id).subscribe((data) =>
      this.animal = data  
    );
  }
}
