import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  template: `
    <style>
      .warning-box {
        width: 75%;
        margin-left: 13.5%;
        background-color: lightcoral;
      }
    </style>
    <div class="warning-box">
      <h1> You do not have access this to this page </h1>
    </div>

  `
})
export class WarningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
