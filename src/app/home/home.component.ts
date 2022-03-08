import { Component, Input, OnInit } from '@angular/core';;
import { SharedService } from '../services/Shared/shared.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  shoes: any;
  constructor(private sharedServ: SharedService) {}

  ngOnInit() {
    this.shoes = this.sharedServ.getAllItems(); // will become more speicifc to featured items
    console.log(this.shoes)
  }
}
