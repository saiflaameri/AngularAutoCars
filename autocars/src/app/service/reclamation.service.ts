import { Injectable } from '@angular/core';
import { reclamation } from './model/reclamation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  readonly url="'http://localhost:8082/devcrew'"

  constructor(private HttpClient:HttpClient) { }

  addreclamation(rec:reclamation){
    return this.HttpClient.post("http://localhost:8082/reclamation/add",rec);

  }

  getallreclamation(){
    return this.HttpClient.get("http://localhost:8082/reclamation/getall");
  }

  deletereclamation(id:number){
    return this.HttpClient.delete("http://localhost:8082/reclamation/delete"+id);

  }

  updatereclamation(rec:reclamation){
    return this.HttpClient.put("http://localhost:8082/reclamation/update/"+rec.idreclamation,rec);

  }
  getreclamationById(id:number){
    return this.HttpClient.get("http://localhost:8082/reclamation/rechercheid/"+id);
  }
}
