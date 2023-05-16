import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { benificaire } from 'src/app/service/model/benificaire';
import { vehicule } from 'src/app/service/model/vehicule';
import { BenificaireService } from 'src/app/service/benificaire.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-benificaire',
  templateUrl: './benificaire.component.html',
  styleUrls: ['./benificaire.component.sass']
})
export class BenificaireComponent implements OnInit {
  listbenificaire:any
  benificaire:benificaire
  progressValue: number;
  public action:String;
  searchQuery: string = '';
  vehicules: any;
  vehicule:vehicule
  public listOfbenificaire : benificaire
  imageDataUrl: any;

  constructor(private HttpClient:HttpClient,private benificaireService:BenificaireService ,private router:Router,private currentRoute:ActivatedRoute,){

    
  }
  ngOnInit(): void {
    this.benificaireService.getallbenificaire().subscribe(data=>{
      
      this.listbenificaire=JSON.parse(JSON.stringify(data));
      console.log('listbenificaire: ',this.listbenificaire);
      console.log("id",this);
      
    
    }) 
   
    
   
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
    this.router.navigate[("benificaire")]
    console.log("eveeentt:",this.benificaire.nom);    
    }




       
  }
  delete(c: benificaire):void {
  
    let i = this.listbenificaire.indexOf(c);
  
    if(confirm("Are you sure?")) {
      this.benificaireService.deletebenificaire(c.idbenificaire).subscribe(() => {
        this.progressValue = 100;
        this.listbenificaire.splice(i, 1);
      });
    }
  }

 
  get filteredList() {
    return this.listbenificaire.filter(benificairer => {
      // Filter by nom, prenom, adresse, or numeropermis
      return benificairer.nom.toLowerCase().includes(this.searchQuery.toLowerCase())
        || benificairer.prenom.toLowerCase().includes(this.searchQuery.toLowerCase())
        || benificairer.adresse.toLowerCase().includes(this.searchQuery.toLowerCase())
    });
  }
  

  onSubmit(){

    if(this.action="Update"){
      this.benificaireService.updatebenificaire(this.benificaire).subscribe(
        ()=>this.router.navigate(['/benificaire']),
        ()=>{console.log('error'),
        ()=>{console.log('complete')}}
  
      )
    }
      
    this.benificaireService.addbenificaire(this.benificaire).subscribe(()=>this.router.navigate(['/benificaire']),()=>{console.log('error'),
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

