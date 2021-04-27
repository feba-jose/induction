import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
public name="Pipe"
public message="welcome to vuelogix"
public person={
  "firstName": "vuelogix",
  "lastName":"logix"
}
public date= new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
