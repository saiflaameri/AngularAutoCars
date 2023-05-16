import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { benificaire } from 'src/app/service/model/benificaire';
import { vehicule } from 'src/app/service/model/vehicule';
import { BenificaireService } from 'src/app/service/benificaire.service';
import { HttpClient } from '@angular/common/http';
import { VehiculeService } from 'src/app/service/vehicule.service';
@Component({
  selector: 'app-addbenificaire',
  templateUrl: './addbenificaire.component.html',
  styleUrls: ['./addbenificaire.sass']
})
export class AddbenificaireComponent {
  
  benificaire:benificaire
  progressValue: number;
vehicule:vehicule
vehicules:any;
  public listOfbenificaire : benificaire
  public action:String
  imageDataUrl: any;
  listvehicule: any;
  constructor(private HttpClient:HttpClient,private vehiculeService:VehiculeService ,private benificaireService:BenificaireService,private route: Router,private currentRoute:ActivatedRoute){      this.benificaire = new benificaire();
}
ngOnInit():  void { 
  
  let id=this.currentRoute.snapshot.params['id'];
  if(id!=null){
    this.action='Update'
    this.benificaireService.getbenificaireById(id).subscribe(
      (data: benificaire)=>{this.benificaire=data}

    )

    
  }
  else{

  this.action='Add new'

  this.benificaire=new benificaire();
  this.route.navigate[("/benificaire")]
  console.log("eveeentt:",this.benificaire.nom);    
  }

  
  this.benificaireService.getallbenificaire().subscribe(data=>{
      
    this.vehicules=JSON.parse(JSON.stringify(data));
    console.log('listbenificaire: ',this.vehicules);
    console.log("id",this);
    
  
  }) 

  this.vehiculeService.getallvehicule().subscribe(dataa=>{
      
    this.listvehicule=JSON.parse(JSON.stringify(dataa));
    console.log('listvehicule: ',this.listvehicule);
    console.log("id",this);

  
  }) 
  
}

//console.log(this.foods.map((x)=>x.viewValue))
//console.log(this.listOfSpecialities.valueOf)

//console.log(this.enum.IA);
//console.log(this.enum);


onSubmit(){

  if(this.action="Update"){
    this.benificaireService.updatebenificaire(this.benificaire).subscribe(
      ()=>this.route.navigate(['/benificaire']),
      ()=>{console.log('error'),
      ()=>{console.log('complete')}}

    )
  }
    
  this.benificaireService.addbenificaire(this.benificaire).subscribe(()=>this.route.navigate(['/benificaire']),()=>{console.log('error'),
  ()=>{console.log('complete')}})



}
  
onImageSelected(event: any): void {
  if (event.target.files && event.target.files[0]) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageDataUrl = e.target.result;
      this.benificaire.img = this.imageDataUrl; // assignez la valeur de imageDataUrl à la propriété img de votre objet benificaire
    };
    reader.readAsDataURL(event.target.files[0]);
  }
}
  

}
