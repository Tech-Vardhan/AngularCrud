import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {RestroService} from '../service/restro.service';

@Component({
  selector: 'app-add-restro',
  templateUrl: './add-restro.component.html',
  styleUrls: ['./add-restro.component.css']
})

export class AddRestroComponent {
  constructor(private Restro : RestroService){}
  
  alert : boolean =false;
   
  AddFormData = new FormGroup({
     name : new FormControl(''),
     email : new FormControl(''),
     address : new FormControl('')
  }) 
  colletionRestro(){
    // console.log();
    this.Restro.saveRestro(this.AddFormData.value).subscribe(data =>{
        this.alert = true;
    })
    this.AddFormData.reset({});
   }
   closeAlert(){
    this.alert = false;

   }
  
  
  ngOnInit():void{}
 

}
