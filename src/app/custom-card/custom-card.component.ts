
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewItemComponent } from '../view-item/view-item.component';

@Component({
  selector: 'app-custom-card',
  template: `
    <div class="card">
      <div class="sold-out" *ngIf="shoe.quantity==0"> <p>SOLD OUT </p> </div>
      <h1 class="title" [style.font-size.px]="getSize(shoe.title)"  > {{shoe.title}} </h1>
      <img class="main-shoe" src="{{ shoe.image }}" (click)="openItem()" /><br />
      <p class="price">$ {{shoe.price}}  </p>
      <div>
        <app-add-item [id]="shoe.id"></app-add-item>
      </div>
    </div>
  `,
  styleUrls: ['custom-card.component.scss'],
})
export class CustomCardComponent implements OnInit {
  // Need to hold a bunch of data to display the items
  @Input() shoe: any;
  constructor(
    private dialog: MatDialog
    ) {}
  ngOnInit(): void {console.log(this.shoe)}

  getSize(title:string) {
    // if (title.length > 20) { // then its too wide for the car
    //   console.log(title);
    //   return "18";
    // }
    // return "20";
  }

  openItem() {
    // opens a view of the item which will display everything (desc, title, quantity, also option to add to cart)
    const dialogRef = this.dialog.open(ViewItemComponent, {
      width: '20rem',
      height: '85%',
      panelClass: 'custom-dialog-container',
      data: {
        shoe: this.shoe,
      }
    });
  }
}
