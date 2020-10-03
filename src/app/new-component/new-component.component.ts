import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  template: `<p> how you doing buddy {{myobj.name}} !</p>
  <ul><li *ngFor="let obj of testArr"> {{obj}}</li> </ul>
  <ul><li *ngIf="testIf == 'somevalue'; then tmplate1 else othertmpl"> </li></ul>
  <ng-template #tmplate1>As Condition matched </ng-template>
  <ng-template #othertmpl>As Condition did not match </ng-template>`,
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  myobj = {
    name: 'Pankaj',
    lastname: 'Saini'
  }

  testArr = ['one','two','three'];

  testIf = 'somevalue';

}
