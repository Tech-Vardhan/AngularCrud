import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestroService } from '../service/restro.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private restro: RestroService) {}
  alert : boolean=false;

  userData = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  colletionRestro() {
    console.log(this.userData.value);
    this.restro.userRestro(this.userData.value).subscribe((result) => {
      console.log(result);
      this.alert = true;
    });
  }
  closeAlert(){
    this.alert = false;
  }
  ngOnInit():void{}
}
