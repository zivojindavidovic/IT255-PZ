import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { isEmpty } from 'rxjs';
import { Animal } from '../models/animal';
import { AnimalService } from '../services/animal.service';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent {

  public animal: Animal;
  public editAnimalForm: FormGroup;
  constructor(private _animalService: AnimalService, private _router: ActivatedRoute, public loginService: LoginServiceService){}

  ngOnInit(): void{
    this._router.params.subscribe(params => {
      let id =+ params['id'];
      this.getAnimal(id);
    });
    this.initForm();
  }

  
  public initForm(){
    this.editAnimalForm = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
    })
  }

  
  public getAnimal(id: number){
    this._animalService.showAnimal(id).subscribe((data) =>
      this.animal = data  
    );
  }  

  public editAnimal(id: number){
    
    let name = this.editAnimalForm.get('name')?.value;
    let price = this.editAnimalForm.get('price')?.value;
    let image = this.editAnimalForm.get('image')?.value;
    if(image===''){
      image = this.animal.image;
    }
    this._animalService.editAnimalById(id, name, price, image).subscribe((data)=>
      this.animal = data
    )
  }
}
