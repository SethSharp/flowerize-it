import { Component, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss'],
})
export class ViewItemComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<ViewItemComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      flower: any;
    }
  ) {}

  ngOnInit(): void {}
}
