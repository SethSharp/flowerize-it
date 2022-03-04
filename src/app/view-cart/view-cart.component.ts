import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
})
export class ViewCartComponent implements OnInit {
  constructor(
    private route: Router,
    private dialogRef: MatDialogRef<ViewCartComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      items:any;
    }
  ) {}

  ngOnInit(): void {}

  goToCart() {
    this.route.navigate(['cart']);
    this.dialogRef.close();
  }
}
