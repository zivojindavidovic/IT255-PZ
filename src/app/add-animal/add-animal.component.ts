import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Animal } from '../models/animal';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent {
  public animals: Animal[];
  public addAnimalForm: FormGroup; 

  constructor(private _animalService: AnimalService){
    this.initForm();
  }

  public initForm(){
    this.addAnimalForm = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      id: new FormControl('1', Validators.required)
    })
  }

  public submitForm(){
    let id = this.addAnimalForm.get('id')?.value;
    let name = this.addAnimalForm.get('name')?.value;
    let price = this.addAnimalForm.get('price')?.value;
    let image = this.addAnimalForm.get('image')?.value;
    let animal = new Animal(id, name, price, image);
    this.addAnimal(animal);
    console.log(id, name, price, image);
  }

  public addAnimal(animal: Animal){
    this._animalService.addAnimal(animal).subscribe((data) =>{
      this.animals.unshift(data);
    })
  }

}
