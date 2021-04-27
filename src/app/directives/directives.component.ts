import { Component, OnInit,Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  displayName="true"
  public color="blue"
  public colors=["red","blue","yelow","orange"];

  @Input() public parentData: any;
  @Output() public childEvent= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit("helloiii vuelogix");
  }

}
