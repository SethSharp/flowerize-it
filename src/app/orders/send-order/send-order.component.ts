import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-send-order',
  template: `
    <mat-form-field>
      <input [(ngModel)]="trackId" matInput placeholder="Tracking ID:" autocomplete="off"/>
    </mat-form-field>
    <button mat-button (click)="sendOrder()"> Send order confirmation </button>
  `,
})
export class SendOrderComponent implements OnInit {

  trackId = "";
  constructor(private dRef: MatDialogRef<SendOrderComponent>) {}

  ngOnInit(): void {}

  sendOrder() {
    if (this.trackId == "") return;
    // send order, some general service function
    this.dRef.close(); // return value if it was successful in all tasks (Sending, deleting from DB...)
  }
}
