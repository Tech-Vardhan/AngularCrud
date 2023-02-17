import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestroService } from '../service/restro.service';

@Component({
  selector: 'app-update-restro',
  templateUrl: './update-restro.component.html',
  styleUrls: ['./update-restro.component.css'],
})
export class UpdateRestroComponent {
 
  constructor(private Restro: RestroService, private route: ActivatedRoute) {}
  alert :boolean = false;
  EditFormData = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });
  ngOnInit() {
    console.warn(this.route.snapshot.params['id']);
    this.Restro.getRestro(this.route.snapshot.params['id']).subscribe(
      (result) => {
        this.EditFormData = new FormGroup({
          name: new FormControl(result['name']),
          email: new FormControl(result['email']),
          address: new FormControl(result['address']),
        });
      }
    );
  }
  
  collection(){
    console.log(this.EditFormData.value);
    this.Restro.updateRestro(this.route.snapshot.params['id'],this.EditFormData.value).subscribe((result)=>{
      console.log(result)
      this.alert= true;
    })
  }
  closeAlert(){
    this.alert = false;
  }
}
