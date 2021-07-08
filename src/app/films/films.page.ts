import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  constructor(private http: HttpClient) { }

  films: any = [];
  
  ngOnInit() {
    this.http.get('https://ghibliapi.herokuapp.com/films')
    .subscribe(data=>{
      console.log(data);
      this.films = data;
    });
  }

}
