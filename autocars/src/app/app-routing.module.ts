import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddassurenceComponent } from './pages/assurence/addassurence/addassurence.component';
import { AssurenceComponent } from './pages/assurence/assurence.component';
import { AddbenificaireComponent } from './pages/benificaire/addbenificaire/addbenificaire.component';
import { BenificaireComponent } from './pages/benificaire/benificaire.component';
import { BondecarburationComponent } from './pages/bondecarburation/bondecarburation.component';
import { AddComponent } from './pages/chauffeur/listchauffeur/add/add.component';
import { ListchauffeurComponent } from './pages/chauffeur/listchauffeur/listchauffeur.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { VignetteComponent } from './pages/vignette/vignette.component';
import { AddvisiteComponent } from './pages/visite/addvisite/addvisite.component';
import { VisiteComponent } from './pages/visite/visite.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
{path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'chauffeur',component:ListchauffeurComponent},
  { path:'Formulaire',component:AddComponent},
  { path:'updatechauffeur/:id',component:AddComponent},
  { path:'addchauf',component:AddComponent},

  {path:'benificaire',component:BenificaireComponent},
  {path:'addbenificaire',component:AddbenificaireComponent},
  { path:'updatebenificaire/:id',component:AddbenificaireComponent},
  
  {path:'bon',component:BondecarburationComponent},
  { path:'updatebonde/:id',component:BondecarburationComponent},

  {path:'assurence',component:AssurenceComponent},
  {path:'addassurence',component:AddassurenceComponent},
  {path:'updateassurence/:id',component:AddassurenceComponent},

  {path:'visite',component:VisiteComponent},
  {path:'addlistevisite',component:AddvisiteComponent},
  {path:'updatelistevisite/:id',component:AddvisiteComponent},
  {path:'vignette',component:VignetteComponent},


  { path:'**',component:NotfoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
