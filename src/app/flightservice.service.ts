import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightserviceService {

  constructor(private http:HttpClient) { }

  fetchFlights():Observable<any>{
    return  this.http.get<any>("https://api.spacexdata.com/v3/launches?limit=100");
   }


   fetchAll(year:any) {
    return  this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&launch_year="+year);
  }

   fetchLanchSucess(lanuchstatus:any,year:any) {
     console.log()
     return  this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&launch_year="+year+"&launch_success="+lanuchstatus);
   }
   fetchLanchSucessAndLandSuccess(landstatus:any,launchstatus:any,year:any){
    return  this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&launch_year="+year+"&land_success="+landstatus+"&launch_success="+launchstatus);
  
  
}
}
