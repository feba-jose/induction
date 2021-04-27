import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
public myId="testId"
public name="vuelogix";
public isDisabled=true;











public successClass="text-success";
public hasError=true;
public isSpecial=true;
public highlightColor="orange"
public greeting=" "
public greetings=" "
public names=""





public messageClasses={
  "text-success":!this.hasError,
  "text-danger":this.hasError,
  "text-sepical":this.isSpecial
}
public titleStyle={
  color:"blue",
  fontStyle:"italics"
}
  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    //return "hello  "  +      this.name;
  }

  onClick(){
    console.log("good morning")
    this.greeting="good morning"
  }
  onClicked(event: any){
    console.log(event)
    this.greetings="good evening"
    this.greetings=event.type
  }
  logMessage(value: any){
    console.log(value)

  }

}

