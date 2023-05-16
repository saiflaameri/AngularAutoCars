import { Component, OnInit } from '@angular/core';
import { BondecarburationService } from 'src/app/service/bondecarburation.service';
import { Chart,registerables } from 'chart.js';
import { VehiculeService } from 'src/app/service/vehicule.service';
import { HttpClient } from '@angular/common/http';
Chart.register(...registerables);

import * as annyang from 'annyang';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  chartdata:any;
  labeldata:any[]=[];
  realdata:any[]=[];
  colordata:any[]=[];
  count:number;
  constructor(private bondecarburationService:BondecarburationService,private vehiculeService:VehiculeService,private HttpClient:HttpClient){}
  
    ngOnInit(): void {
      this.retrieveCount();

   
      this.bondecarburationService.getallbondecarburation().subscribe(result=>{
        this.chartdata=result;
        if(this.chartdata!=null){
          for(let i=0; i<this.chartdata.length;i++){
            //console.log(this.chartdata[i]);
            this.labeldata.push(this.chartdata[i].station);
            this.realdata.push(this.chartdata[i].cout);
          }
  
        }});
      this.renderchart(this.labeldata,this.realdata);
    }
  
    renderchart(labeldata:any,realdata:any){
      const ctx = document.getElementById('myChart');
  
    new Chart('ctx', {
      type: 'line',
      data: {
        labels: labeldata,
        datasets: [{
          label: '# of Votes',
          
          data: realdata,
          borderWidth: 1,
          backgroundColor: '#FFB1C1',

        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Carburation statestique',
            font: {
              size: 18,
              weight: 'bold'
            }
          }},
        scales: { x: {
          title: {
            display: true,
            text: 'Station'
          }
        },
          
          y: { title: {
            display: true,
            text: 'Coût'
          },
            beginAtZero: true
          }
        }
      }
    });
  
    }
    retrieveCount(): void {
      this.vehiculeService.countevent().subscribe(
        count => {
          this.count = count;
        },
        error => {
          console.log('Une erreur s\'est produite lors de la récupération du nombre de véhicules : ', error);
        }
      );
    }

    
  
  }
  