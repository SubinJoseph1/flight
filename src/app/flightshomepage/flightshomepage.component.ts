import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';

@Component({
  selector: 'app-flightshomepage',
  templateUrl: './flightshomepage.component.html',
  styleUrls: ['./flightshomepage.component.css']
})
export class FlightshomepageComponent implements OnInit {
  flightData:any=[];
  year1="";
  land:boolean=false
  sucess: boolean = true;
  LandSucc: boolean = false;
  constructor(private http:FlightserviceService) { }
  buttonsarray:any=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
  
  ngOnInit(): void {
    this.http.fetchFlights().subscribe(data=>{
      this.flightData=data;
      if(this.flightData.length==0){
        console.log("error")
      }
      console.log("Data fetched",this.flightData);
    }) 
  }

  sendYear(year:any){
    console.log(year);
    this.year1=year
    this.http.fetchAll(year).subscribe(data => {
     this.flightData = data;
      console.log("sucees :", this.flightData)
      
    })
  }

  launch_success(lanuchstatus:any){
    console.log(lanuchstatus)
    this.land=lanuchstatus
    this.http.fetchLanchSucess(lanuchstatus,this.year1).subscribe(data=>{
      this.flightData=data;
    })

  }
  land_success(landstatus:any){
    console.log(landstatus)
    this.http.fetchLanchSucessAndLandSuccess(landstatus,this.land,this.year1).subscribe(data=>{
      this.flightData=data;
    })

  }


}
