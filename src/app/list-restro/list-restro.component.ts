import { Component } from '@angular/core';
import {RestroService } from'../service/restro.service';

@Component({
  selector: 'app-list-restro',
  templateUrl: './list-restro.component.html',
  styleUrls: ['./list-restro.component.css']
})
export class ListRestroComponent {

  constructor(private restro : RestroService){ }
  collection: any = [];
   ngOnInit()
   {
    this.restro.getList().subscribe((data)=>{
      console.warn(data);
      this.collection = data;
      
    });
  }
 
  delete(item : number){
    this.collection.splice(item-1,1)
    
    this.restro.deleteRestro(item).subscribe((result)=>{
      console.log(result)
    })
   

  }
  
}
