import { Injectable } from '@angular/core';
import { rapportvoiture } from './model/rapportvoiture';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RapportvoitureService {
 readonly url="'http://localhost:8082/devcrew'"

  constructor(private HttpClient:HttpClient) { }

  addrapportvoiture(rv:rapportvoiture){
    return this.HttpClient.post("http://localhost:8082/rapport/add",rv);

  }

  getallrapportvoiture(){
    return this.HttpClient.get("http://localhost:8082/rapport/getall");
  }

  deleterapportvoiture(id:number){
    return this.HttpClient.delete("http://localhost:8082/rapport/delete"+id);

  }

  updaterapportvoiture(rv:rapportvoiture){
    return this.HttpClient.put("http://localhost:8082/rapport/update/"+rv.idrapport,rv);

  }
  getrapportvoitureById(id:number){
    return this.HttpClient.get("http://localhost:8082/rapport/rechercheid/"+id);
  }
}

