import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChauffeurService } from 'src/app/service/chauffeur.service';
import { chauffeur } from 'src/app/service/model/chauffeur';
import { HttpClient } from '@angular/common/http';
import { vehicule } from 'src/app/service/model/vehicule';
import * as annyang from 'annyang';

@Component({
  selector: 'app-listchauffeur',
  templateUrl: './listchauffeur.component.html',
  styleUrls: ['./listchauffeur.component.sass']
})
export class ListchauffeurComponent implements OnInit{
  listchauffeur:any
  chauffeur:chauffeur
  progressValue: number;
  public action:String;
  searchQuery: string = '';
  vehicules: any;
  vehicule:vehicule
  public listOfchauffeur : chauffeur
  imageDataUrl: any;
  transcript: string = '';

  constructor(private HttpClient:HttpClient,private chauffeurService:ChauffeurService,private router:Router,private currentRoute:ActivatedRoute,){

    
  }
  ngOnInit(): void {

   if (annyang) {
  const commands = {
    '*term': (term: string) => {
      this.transcript = term;
    
      // Effectuez des actions supplémentaires ici en fonction du terme recherché
    }
  };

  annyang.addCommands(commands);
  annyang.start();
}

  

    this.chauffeurService.getallchauffeur().subscribe(data=>{
      
      this.listchauffeur=JSON.parse(JSON.stringify(data));
      console.log('listchauffeur: ',this.listchauffeur);
      console.log("id",this);
      
    
    }) 
   
    
   
    let id=this.currentRoute.snapshot.params['id'];
    if(id!=null){
      this.action='Update'
      this.chauffeurService.getchauffeurById(id).subscribe(
        (data: chauffeur)=>{this.chauffeur=data}
  
      )
  
      
    }
    else{
  
    this.action='Add new'
  
    this.chauffeur=new chauffeur();
    this.router.navigate[("chauffeur")]
    console.log("eveeentt:",this.chauffeur.nom);    
    }




       
  }
  delete(c: chauffeur):void {
  
    let i = this.listchauffeur.indexOf(c);
  
    if(confirm("Are you sure?")) {
      this.chauffeurService.deletechauffeur(c.idchauffeur).subscribe(() => {
        this.progressValue = 100;
        this.listchauffeur.splice(i, 1);
      });
    }
  }

 
  get filteredList() {
    return this.listchauffeur.filter(chauffeurr => {
      // Filter by nom, prenom, adresse, or numeropermis
      return chauffeurr.nom.toLowerCase().includes(this.searchQuery.toLowerCase())
        || chauffeurr.prenom.toLowerCase().includes(this.searchQuery.toLowerCase())
        || chauffeurr.adresse.toLowerCase().includes(this.searchQuery.toLowerCase())
    });
  }
  

  onSubmit(){

    if(this.action="Update"){
      this.chauffeurService.updatechauffeur(this.chauffeur).subscribe(
        ()=>this.router.navigate(['/chauffeur']),
        ()=>{console.log('error'),
        ()=>{console.log('complete')}}
  
      )
    }
      
    this.chauffeurService.addchauffeur(this.chauffeur).subscribe(()=>this.router.navigate(['/chauffeur']),()=>{console.log('error'),
    ()=>{console.log('complete')}})
  
  
  
  }

  navigateToPage(pageName: string): void {
    this.router.navigate([pageName]);
  }
    
  onImageSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageDataUrl = e.target.result;
        this.chauffeur.img = this.imageDataUrl; // assignez la valeur de imageDataUrl à la propriété img de votre objet chauffeur
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  startListening(): void {
    if (annyang) {
      annyang.start();
    }
  }
  
  stopListening(): void {
    if (annyang) {
      annyang.abort();
    }
  }
  

}

