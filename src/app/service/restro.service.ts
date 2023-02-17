import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestroService {
 url =' http://localhost:3000/restaurant'
  addUser = 'http://localhost:3000/'
  constructor(private http : HttpClient) { }
 
 getList()
 {
   return this.http.get(this.url) 
 } 
 saveRestro(data :any){
    return this.http.post(this.url,data)
  }
  deleteRestro(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }
  getRestro(id:any){
    return this.http.get<any>(`${this.url}/${id}`)
  }
  updateRestro(id:any,data:any){
    return this.http.put<any>(`${this.url}/${id}`,data)
  }
  userRestro(data:any){
    return this.http.post(this.addUser + "users" ,   data)
  }
}
