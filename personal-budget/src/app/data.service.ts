import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data1={};
  public labels1=[];
  public dataSource = {
    datasets: [
        {
            data: [],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                "#46b535",
                "#05e2f1",
                "#552bec",
                "red",
                "blue",
                "green"
            ],
        }
    ],
    labels: []
};



  constructor(private http: HttpClient) { }
  getData ()
  {
     this.http.get('http://localhost:3000/budget').subscribe((res: any)=>{
      for(var i=0; i<res.myBudget.length;i++){

      this.dataSource.datasets[0].data[i]=res.myBudget[i].budget;
      this.dataSource.labels[i]=res.myBudget[i].title;

      this.data1[res.myBudget[i].title]=res.myBudget[i].budget;
      this.labels1[i]=res.myBudget[i].title;

    }

});}}
