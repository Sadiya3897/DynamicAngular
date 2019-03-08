import { Component , OnInit } from '@angular/core';
import { FetchService } from './fetch.service' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private fetch: FetchService) {}
  title = 'DynamicTable';
  data = this.fetch.getData();
  head = this.fetch.getColumns();
  value = [];
  ngOnInit(): void {

  }
}
